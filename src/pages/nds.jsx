import React from 'react'

const nds = () => {
    return (
        <div>
               <div className={`fixed inset-0 flex flex-col items-center px-4 transition-all duration-300 ${prompt.trim() || messages.length > 0
              ? "justify-end pb-6"
              : "justify-center"
              }`}
           
            >

             
              <div className="w-full max-w-2xl"
              >
              
                {(errorBanner || rateLimit) && (
                  <div
                    sx={{
                      width: "100%",
                      mb: 1,
                      p: 1.25,
                      borderRadius: 2,
                      border: "1px solid " + (errorBanner ? "#ffcdd2" : "#ffe0b2"),
                      backgroundColor: errorBanner ? "#ffebee" : "#fff8e1",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 1,
                    }}
                  >
                    <Typography sx={{ fontSize: 13, color: errorBanner ? "#b71c1c" : "#8a4b00", pr: 1 }}>
                      {errorBanner
                        ? errorBanner.message
                        : `${rateLimit?.message || "Rate limit exceeded."}${rateLimit?.secondsLeft ? ` Retry in ${rateLimit.secondsLeft}s.` : ""}`}
                    </Typography>
                    <IconButton
                      size="small"
                      aria-label="Dismiss message"
                      onClick={() => {
                        if (errorBanner) setErrorBanner(null);
                        if (rateLimit) setRateLimit(null);
                      }}
                      sx={{ mt: "-2px" }}
                    >
                      <MdClose />
                    </IconButton>
                  </div>
                )}

             

                <div className="sticky bottom-0 bg-[#f7f7f8]/80 backdrop-blur-md ">
                  <div className="max-w-2xl mx-auto">
                    <div className="flex items-end bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                      {/* <Mic /> */}
                      <Plus className="w-5 h-5 text-gray-400 mr-3 mb-2" />
                      <textarea
                        rows={1}
                        className="w-full bg-transparent resize-none outline-none text-gray-800 placeholder-gray-400 text-sm sm:text-base"
                        placeholder="Ask anything"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}

                      />
                      <div className="flex justify-end mt-2">
                        <Button
                          className="ml-2 p-2 rounded-full bg-black text-white"
                          variant="contained"
                          disabled={
                            !prompt.trim() ||
                            sendMessage.isPending ||
                            Boolean(rateLimit) ||
                            !textAllowed ||
                            !(chatId || selectedModelId)
                          }
                          sx={{
                            color: "#fefdfdff",
                            backgroundColor: !prompt.trim() || rateLimit || !textAllowed || !(chatId || selectedModelId)
                              ? "#5234c9"
                              : "#5234c9",
                            textTransform: "none",
                            borderRadius: "10px"

                          }}
                          title={
                            !textAllowed
                              ? "Text input/output is disabled in Model Details for this model."
                              : (!(chatId || selectedModelId) ? "Select a model (or open a chat) to run." : undefined)
                          }
                          onClick={() => {
                            if (rateLimit) return;
                            setErrorBanner(null);
                            if (!chatId && selectedModelId) {
                              createChat.mutate({ modelId: selectedModelId, mode: effectiveMode }, {
                                onSuccess: () => sendMessage.mutate(prompt),
                              });
                            } else {
                              // optimistic append (keeps UI responsive)
                              const tmpUserId = `tmp-user-${Date.now()}`;
                              const tmpAsstId = `tmp-asst-${Date.now()}`;
                              setMessages((prev) => [
                                ...prev,
                                normalizeMessage({ id: tmpUserId, role: "user", content: prompt, createdAt: new Date().toISOString(), metadataJson: null, _pending: true }),
                                normalizeMessage({ id: tmpAsstId, role: "assistant", content: "…", createdAt: new Date().toISOString(), metadataJson: null, _pending: true }),
                              ]);
                              sendMessage.mutate(prompt);
                            }
                          }}
                        >
                          <Send size={30} style={{ marginRight: "6px" }} />
                          {rateLimit ? `Wait (${rateLimit.secondsLeft}s)` : (sendMessage.isPending ? "Running..." : "Run")}
                        </Button>
                      </div>
                    </div>
                 
                  </div>
                  

                </div>
              </div>

            </div>

        </div>
    )
}

export default nds



import {
  Box,
  Button,
  Typography,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Divider,
  IconButton,
  Slider,
  Menu,
  MenuItem,
} from "@mui/material";
import { Paperclip, Mic, ChevronDown, History, Send, Plus } from "lucide-react";
import { TbMapSearch } from "react-icons/tb";
import { PiPaintBrushHouseholdLight } from "react-icons/pi";
import { VscGitCompare } from "react-icons/vsc";
import { FaBarsProgress } from "react-icons/fa6";
import { IoMdPlay } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import gpt from "../../assets/gpt-JRKBi7sz.svg";
import meta from "../../assets/meta-svg.svg";
import mbzuai from "../../assets/mbzuai.svg";
import inception from "../../assets/inception.svg";
import mistral from "../../assets/mistral.svg";
import stablediffusion from "../../assets/stablediffusion.png";
import anthropicCalude from "../../assets/anthropicCalude.svg";
import deepseek from "../../assets/deepseek.svg";
import qwen from "../../assets/qwen.svg";
import cohere from "../../assets/cohere.svg";
import xai from "../../assets/xai.svg";
import React, { useMemo, useState } from "react";
import { MdChevronLeft, MdChevronRight, MdDeleteOutline, MdVisibility, MdVisibilityOff, MdClose } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiDelete, apiGet, apiPost } from "../../api/client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const LAST_CHAT_ID_KEY = "apex_last_chat_id";
const LAST_CHAT_ID_KEY_STANDARD = "apex_last_chat_id_standard";
const LAST_CHAT_ID_KEY_TRAINED = "apex_last_chat_id_trained";

const SUPPORTED_INPUT_MODALITIES = ["text"]; // Phase-1 adapters: text-only
const SUPPORTED_OUTPUT_MODALITIES = ["text"];


const gradientText = {
  background: "linear-gradient(to right, #11a77cb9, #0072ff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const Chat = ({ forcedModeOverride = null, showOrchestrationInspector = false }) => {
  const location = useLocation();
  const { state } = location;
  const forcedMode =
    forcedModeOverride ||
    (location.pathname === "/chat"
      ? "STANDARD"
      : (location.pathname === "/realtime" ? "TRAINED" : null));
  const lastChatStorageKey =
    forcedMode === "TRAINED"
      ? LAST_CHAT_ID_KEY_TRAINED
      : (forcedMode === "STANDARD" ? LAST_CHAT_ID_KEY_STANDARD : LAST_CHAT_ID_KEY);
  const hideModeToggle = location.pathname === "/chat" || location.pathname === "/realtime";
  const initialModelName = state?.modelName;
  const initialModelLogo = state?.modelLogo;
  const initialModelId = state?.modelId;

  const providers = [
    { name: "OpenAI", logo: gpt },
    { name: "Meta", logo: meta },
    { name: "MBZUAI", logo: mbzuai },
    { name: "Inception", logo: inception },
    { name: "Mistral AI", logo: mistral },
    { name: "Stability AI", logo: stablediffusion },
    { name: "Anthropic Claude", logo: anthropicCalude },
    { name: "DeepSeek", logo: deepseek },
    { name: "Qwen", logo: qwen },
    { name: "Cohere", logo: cohere },
    { name: "xAI", logo: xai },
  ];
  const [aiModel, setAiModel] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedModelId, setSelectedModelId] = useState(initialModelId || null);
  const [selectedModelName, setSelectedModelName] = useState(initialModelName || null);
  const [selectedModelLogo, setSelectedModelLogo] = useState(initialModelLogo || null);
  const [playgroundMode, setPlaygroundMode] = useState(forcedMode || "STANDARD"); // STANDARD | TRAINED
  const [chatId, setChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [rateLimit, setRateLimit] = useState(null); // { secondsLeft, message }
  const [errorBanner, setErrorBanner] = useState(null); // { message }
  const [historyLimit, setHistoryLimit] = useState(200);
  const [historyLoading, setHistoryLoading] = useState(false);
  // const [historyOpen, setHistoryOpen] = useState(false);
  const [modelConfig, setModelConfig] = useState(null); // parsed configJson
  const [confirmClearOpen, setConfirmClearOpen] = useState(false);
  const [confirmClearHistoryOpen, setConfirmClearHistoryOpen] = useState(false);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [deletingChat, setDeletingChat] = useState(null); // chat object
  const [orchestrationOpen, setOrchestrationOpen] = useState(false);
  const scrollRef = React.useRef(null);
  const bottomRef = React.useRef(null);
  const [isNearBottom, setIsNearBottom] = useState(true);

  const { data: modelsPage } = useQuery({
    queryKey: ["models", { page: 1, pageSize: 100 }],
    queryFn: async () => apiGet(`/api/models?page=1&pageSize=100&kind=${encodeURIComponent(forcedMode === "TRAINED" ? "TRAINED" : "BASE")}`),
  });
  const models = modelsPage?.items || [];

  function safeParseJson(s) {
    if (s == null) return null;
    try {
      return JSON.parse(s);
    } catch {
      return null;
    }
  }

  function isTrainedSetupModel(m) {
    if (!m) return false;
    const t = String(m.type || "").toUpperCase();
    if (t === "TRAINED") return true;
    const cfg = safeParseJson(m.configJson);
    if (cfg && typeof cfg === "object" && cfg.trainingSetup) return true;
    // Fallback: tolerate bad/double-encoded configJson
    const raw = (m.configJson ?? "").toString();
    return raw.includes("\"trainingSetup\"") || raw.includes("trainingSetup");
  }

  const selectableModels = useMemo(() => {
    if (!forcedMode) return models;
    const trained = models.filter(isTrainedSetupModel);
    const standard = models.filter((m) => !isTrainedSetupModel(m));
    const out = forcedMode === "TRAINED" ? trained : standard;
    // Do not fall back across modes; otherwise TRAINED looks like STANDARD.
    return out;
  }, [models, forcedMode]);

  const noSelectableModels = forcedMode && Array.isArray(selectableModels) && selectableModels.length === 0;

  const { data: chatsPage, refetch: refetchChats } = useQuery({
    queryKey: ["chats", { page: 1, pageSize: 50 }],
    queryFn: async () => apiGet("/chat?page=1&pageSize=50"),
  });
  const allChats = useMemo(() => {
    if (Array.isArray(chatsPage)) return chatsPage;
    if (chatsPage && Array.isArray(chatsPage.items)) return chatsPage.items;
    return [];
  }, [chatsPage]);
  const chats = useMemo(() => {
    if (!forcedMode) return allChats;
    const fm = String(forcedMode).toUpperCase();
    return allChats.filter((c) => String(c?.mode || "STANDARD").toUpperCase() === fm);
  }, [allChats, forcedMode]);

  function normalizeMessage(m) {
    const base = { ...m };
    base._pending = Boolean(m?._pending);
    base.usageLabel = null;
    base.contextUsage = null; // { usedPct, usedTokens, limitTokens }
    base.truncatedByMaxOutputTokens = false;
    base.orchestration = null;
    if (!m?.metadataJson) return base;
    try {
      const meta = JSON.parse(m.metadataJson);
      if (meta?.orchestration && typeof meta.orchestration === "object") {
        base.orchestration = meta.orchestration;
      }
      const u = meta?.usage;
      if (!u) return base;
      const pt = typeof u.promptTokens === "number" ? u.promptTokens : null;
      const ct = typeof u.completionTokens === "number" ? u.completionTokens : null;
      const tt = typeof u.totalTokens === "number" ? u.totalTokens : null;

      // context usage (if provided by backend)
      if (u.context && typeof u.context === "object") {
        const usedTokens = typeof u.context.usedTokens === "number" ? u.context.usedTokens : null;
        const limitTokens = typeof u.context.limitTokens === "number" ? u.context.limitTokens : null;
        const usedPct = typeof u.context.usedPct === "number" ? u.context.usedPct : null;
        if (usedTokens != null && limitTokens != null && usedPct != null) {
          base.contextUsage = { usedPct, usedTokens, limitTokens };
        }
      }

      if (pt == null && ct == null && tt == null) return base;
      const parts = [];
      if (pt != null) parts.push(`input ${pt}`);
      if (ct != null) parts.push(`output ${ct}`);
      if (tt != null) parts.push(`total ${tt}`);
      base.usageLabel = `Tokens used: ${parts.join(" • ")}`;

      if (u.truncatedByMaxOutputTokens === true) {
        base.truncatedByMaxOutputTokens = true;
      }
      return base;
    } catch {
      return base;
    }
  }

  const getLatestOrchestration = () => {
    for (let i = messages.length - 1; i >= 0; i--) {
      const m = messages[i];
      if (m?.role === "assistant" && m?.orchestration) return m.orchestration;
    }
    return null;
  };

  const latestOrchestration = getLatestOrchestration();

  const formatJson = (obj) => {
    try {
      return JSON.stringify(obj, null, 2);
    } catch {
      return String(obj);
    }
  };

  const formatTokenCount = (n) => {
    if (typeof n !== "number" || Number.isNaN(n)) return "-";
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
    return String(n);
  };

  const getLatestContextUsage = () => {
    // Use the most recent assistant message that has contextUsage
    for (let i = messages.length - 1; i >= 0; i--) {
      const m = messages[i];
      if (m?.role === "assistant" && m?.contextUsage) return m.contextUsage;
    }
    return null;
  };

  const MarkdownMessage = ({ content }) => (
    <Box
      sx={{
        fontSize: 14,
        lineHeight: 1.6,
        "& p": { margin: "0 0 10px 0" },
        "& ul, & ol": { paddingLeft: "18px", margin: "0 0 10px 0" },
        "& li": { marginBottom: "6px" },
        "& code": { backgroundColor: "#eef2f4", padding: "2px 6px", borderRadius: 1, fontSize: 13 },
        "& pre": {
          backgroundColor: "#0b1020",
          color: "#e6edf3",
          padding: "12px 14px",
          borderRadius: 2,
          overflowX: "auto",
          margin: "0 0 12px 0",
        },
        "& pre code": { backgroundColor: "transparent", padding: 0, color: "inherit" },
        "& h1, & h2, & h3, & h4": { margin: "12px 0 8px 0", fontWeight: 800, lineHeight: 1.25 },
        "& blockquote": {
          borderLeft: "3px solid #d0d7df",
          paddingLeft: "10px",
          margin: "0 0 12px 0",
          color: "#4b5563",
        },
        "& hr": { border: "none", borderTop: "1px solid #e5e7eb", margin: "12px 0" },
      }}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content || ""}
      </ReactMarkdown>
    </Box>
  );

  const parseConfigJson = (s) => {
    if (!s) return null;
    try { return JSON.parse(s); } catch { return null; }
  };

  const normalizeModality = (m) => {
    const s = (m ?? "").toString().trim().toLowerCase();
    if (!s) return null;
    if (s === "image") return "images";
    if (s === "embedding") return "embeddings";
    return s;
  };

  const normalizeModalities = (arr, fallback) => {
    const list = Array.isArray(arr) ? arr : [];
    const out = list.map(normalizeModality).filter(Boolean);
    return out.length ? out : fallback;
  };

  const loadSelectedModelConfig = async (modelId) => {
    if (!modelId) {
      setModelConfig(null);
      return;
    }
    try {
      const m = await apiGet(`/api/models/${modelId}`);
      setModelConfig(parseConfigJson(m?.configJson));
    } catch {
      setModelConfig(null);
    }
  };

  const inputModalities = normalizeModalities(modelConfig?.inputModalities, ["text"]);
  const outputModalities = normalizeModalities(modelConfig?.outputModalities, ["text"]);
  const textAllowed = inputModalities.includes("text") && outputModalities.includes("text");

  const effectiveMode = forcedMode || playgroundMode;

  const createChat = useMutation({
    mutationFn: async ({ modelId, mode }) => apiPost("/chat", { modelId, mode: forcedMode || mode }),
    onSuccess: (chat) => {
      setChatId(chat.id);
      try {
        localStorage.setItem(lastChatStorageKey, chat.id);
      } catch { }
      if (!forcedMode && chat?.mode) setPlaygroundMode(chat.mode);
      setMessages([]);
      setErrorBanner(null);
      refetchChats();
    },
  });

  const clearChat = useMutation({
    mutationFn: async () => {
      if (!chatId) throw new Error("No chat selected");
      return apiDelete(`/chat/${chatId}/messages`);
    },
    onSuccess: async () => {
      setMessages([]);
      setConfirmClearOpen(false);
      setErrorBanner(null);
      await refetchChats();
    },
    onError: (e) => setErrorBanner({ message: e?.message || "Failed to clear chat." }),
  });

  const clearHistory = useMutation({
    mutationFn: async () => {
      const ids = (Array.isArray(chats) ? chats : []).map((c) => c?.id).filter(Boolean);
      await Promise.all(ids.map((id) => apiDelete(`/chat/${id}`).catch(() => null)));
      return true;
    },
    onSuccess: async () => {
      setConfirmClearHistoryOpen(false);
      setErrorBanner(null);
      setChatId(null);
      setMessages([]);
      try { localStorage.removeItem(lastChatStorageKey); } catch { }
      await refetchChats();
    },
    onError: (e) => setErrorBanner({ message: e?.message || "Failed to clear chat history." }),
  });

  const deleteChat = useMutation({
    mutationFn: async (id) => {
      if (!id) throw new Error("No chat selected");
      return apiDelete(`/chat/${id}`);
    },
    onSuccess: async () => {
      const id = deletingChat?.id;
      setConfirmDeleteOpen(false);
      setDeletingChat(null);
      setErrorBanner(null);

      // If we deleted the currently open chat, reset UI.
      if (id && id === chatId) {
        setChatId(null);
        setMessages([]);
        setSelectedModelId(null);
        setSelectedModelName(null);
        setSelectedModelLogo(null);
        setModelConfig(null);
      }
      try {
        const saved = localStorage.getItem(lastChatStorageKey);
        if (id && saved === id) localStorage.removeItem(lastChatStorageKey);
      } catch { }

      await refetchChats();
    },
    onError: (e) => setErrorBanner({ message: e?.message || "Failed to delete chat." }),
  });

  const sendMessage = useMutation({
    mutationFn: async (content) => {
      if (!chatId) throw new Error("Chat not created yet");
      return apiPost(`/chat/${chatId}/messages`, { content });
    },
    onSuccess: (msgs) => {
      // Backend returns only the newly created messages (user + assistant) for low latency.
      const arr = Array.isArray(msgs) ? msgs : [];
      setMessages((prev) => {
        // Remove any pending optimistic placeholders (we append them at the end).
        const withoutPending = prev.filter((m) => !m?._pending);
        const normalized = arr.map(normalizeMessage);
        return [...withoutPending, ...normalized];
      });
      setPrompt("");
      setRateLimit(null);
      setErrorBanner(null);
      refetchChats();
    },
    onError: (e) => {
      const retryAfter =
        e?.retryAfterSeconds ??
        e?.details?.retryAfterSeconds ??
        null;
      if (e?.status === 429) {
        const seconds = typeof retryAfter === "number" && retryAfter > 0 ? retryAfter : 30;
        setRateLimit({
          secondsLeft: seconds,
          message: e?.message || "Rate limit exceeded. Please wait and retry."
        });
        setErrorBanner(null);
        return;
      }
      if (e?.status === 403 && e?.details) {
        const policyId =
          e?.details?.policy?.policyId ||
          e?.details?.reason ||
          null;
        const msg = policyId
          ? `${e?.message || "Request blocked"} (policy: ${policyId})`
          : (e?.message || "Request blocked by rules");
        setErrorBanner({ message: msg });
        return;
      }
      setErrorBanner({ message: e?.message || "Request failed. Please try again." });
    }
  });

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const distance = el.scrollHeight - el.scrollTop - el.clientHeight;
    setIsNearBottom(distance < 120);
  };

  const scrollToBottom = (behavior = "smooth") => {
    try {
      bottomRef.current?.scrollIntoView({ behavior, block: "end" });
    } catch {
      // ignore
    }
  };

  const fetchHistory = async (limit) => {
    if (!chatId) return;
    setHistoryLoading(true);
    setErrorBanner(null);
    try {
      const page = await apiGet(`/chat/${chatId}/messages/page?page=1&pageSize=${limit}&order=desc`);
      const arr = Array.isArray(page) ? page : [];
      // backend returns desc; flip to asc for display
      const asc = arr.slice().reverse().map(normalizeMessage);
      setMessages(asc);
    } catch (e) {
      setErrorBanner({ message: e?.message || "Failed to load chat history." });
    } finally {
      setHistoryLoading(false);
    }
  };

  const restoreLastChat = async () => {
    let saved = null;
    try {
      saved = localStorage.getItem(lastChatStorageKey);
    } catch { }
    if (!saved) return;

    try {
      const chat = await apiGet(`/chat/${saved}`);
      // If we're on a forced-mode route (/chat STANDARD or /realtime TRAINED),
      // don't restore a chat created in a different mode (it would silently disable orchestration).
      if (forcedMode && chat?.mode && String(chat.mode).toUpperCase() !== String(forcedMode).toUpperCase()) {
        try { localStorage.removeItem(lastChatStorageKey); } catch { }
        setChatId(null);
        if (chat?.modelId) {
          setSelectedModelId(chat.modelId);
          setSelectedModelName(chat.modelName || null);
          setSelectedModelLogo(chat.providerLogoUrl || null);
          // Create a new chat in the forced mode
          createChat.mutate({ modelId: chat.modelId, mode: effectiveMode });
        }
        return;
      }

      // restore chat id + selected model so history can load and send button works
      setChatId(saved);
      if (chat?.modelId) setSelectedModelId(chat.modelId);
      if (chat?.modelName) setSelectedModelName(chat.modelName);
      if (chat?.providerLogoUrl) setSelectedModelLogo(chat.providerLogoUrl);
      if (!forcedMode && chat?.mode) setPlaygroundMode(chat.mode);
      if (chat?.modelId) await loadSelectedModelConfig(chat.modelId);
    } catch (e) {
      // if chat is invalid/expired, clear saved value so we don't loop forever
      try { localStorage.removeItem(lastChatStorageKey); } catch { }
    }
  };

  // On direct /chat open (or page refresh), restore previous chat session so history appears.
  React.useEffect(() => {
    if (initialModelId) return; // coming from Try it out -> createChat flow
    if (chatId) return;
    restoreLastChat();
  }, []);

  // Create chat automatically when we arrive from "Try it out"
  React.useEffect(() => {
    if (selectedModelId && !chatId && !createChat.isPending) {
      createChat.mutate({ modelId: selectedModelId, mode: effectiveMode });
    }
  }, [selectedModelId, chatId]);

  // Load model config whenever selected model changes (drives modality UI + validation)
  React.useEffect(() => {
    if (!selectedModelId) return;
    loadSelectedModelConfig(selectedModelId);
  }, [selectedModelId]);

  // Load recent history whenever chat changes or user increases history window.
  React.useEffect(() => {
    if (!chatId) return;
    fetchHistory(historyLimit);
  }, [chatId, historyLimit]);

  // Auto-scroll when new messages arrive (unless user scrolled up).
  React.useEffect(() => {
    if (messages.length === 0) return;
    if (!isNearBottom) return;
    scrollToBottom("auto");
  }, [messages.length]);

  // Rate limit countdown
  React.useEffect(() => {
    if (!rateLimit?.secondsLeft) return;
    const t = setInterval(() => {
      setRateLimit((prev) => {
        if (!prev) return prev;
        const next = Math.max(0, (prev.secondsLeft || 0) - 1);
        if (next === 0) return null;
        return { ...prev, secondsLeft: next };
      });
    }, 1000);
    return () => clearInterval(t);
  }, [rateLimit?.secondsLeft]);

  const menuOpen = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // State
  const [anchorElHist, setAnchorElHist] = useState(null);
  const historyOpen = Boolean(anchorElHist);

  const handleHistClick = (event) => {
    setAnchorElHist(event.currentTarget);
  };

  const handleHistClose = () => {
    setAnchorElHist(null);
  };


  const isActive = prompt.trim() || messages.length > 0;

  const handleSendMessage = () => {
    if (!prompt.trim()) return;

    setErrorBanner(null);

    if (!chatId && selectedModelId) {
      createChat.mutate(
        { modelId: selectedModelId, mode: effectiveMode },
        {
          onSuccess: () => sendMessage.mutate(prompt),
        }
      );
    } else {
      const tmpUserId = `tmp-user-${Date.now()}`;
      const tmpAsstId = `tmp-asst-${Date.now()}`;

      setMessages((prev) => [
        ...prev,
        normalizeMessage({
          id: tmpUserId,
          role: "user",
          content: prompt,
          createdAt: new Date().toISOString(),
          _pending: true,
        }),
        normalizeMessage({
          id: tmpAsstId,
          role: "assistant",
          content: "…",
          createdAt: new Date().toISOString(),
          _pending: true,
        }),
      ]);

      sendMessage.mutate(prompt);
    }

    setPrompt(""); // clear input ✅
  };
  return (
    <div className="">
      <Box
        sx={{
          height: "90vh",
          margin: { md: "0", sm: "2" },
          display: "flex",

          flexDirection: "column",
        }}
      >
        {/* ================= HISTORY + CHAT WRAPPER ================= */}
        <Box sx={{ display: "flex", flex: 1, minHeight: 0 }}>
          {/* Left: history */}
          {/* {historyOpen && (
            <Box sx={{
              width: 280,
              borderRight: "1px solid #e0e0e0",
              backgroundColor: "#f4f5f6",
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
            }}>
              <Box sx={{ p: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography sx={{ fontWeight: 800 }}>Chat history</Typography>
                <IconButton size="small" onClick={() => setHistoryOpen(false)} aria-label="Collapse history">
                  <MdChevronLeft />
                </IconButton>
              </Box>
              <Box sx={{ px: 2, pb: 1 }}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ textTransform: "none", backgroundColor: "#02b499", "&:hover": { backgroundColor: "#00b894" } }}
                  onClick={() => setAiModel(true)}
                >
                  New chat
                </Button>
                {forcedMode === "TRAINED" && (
                  <Button
                    fullWidth
                    variant="text"
                    sx={{ mt: 0.5, textTransform: "none", color: "#6a7074" }}
                    onClick={() => setConfirmClearHistoryOpen(true)}
                    disabled={clearHistory.isPending || chats.length === 0}
                  >
                    {clearHistory.isPending ? "Clearing history..." : "Clear history"}
                  </Button>
                )}
              </Box>
              <Box sx={{ flex: 1, overflowY: "auto", px: 1, pb: 2 }}>
                {chats.length === 0 ? (
                  <Typography sx={{ color: "#6a7074", fontSize: 13, px: 1, mt: 1 }}>
                    No chats yet.
                  </Typography>
                ) : (
                  chats.map((c) => (
                    <Box
                      key={c.id}
                      onClick={async () => {
                        setChatId(c.id);
                        try { localStorage.setItem(lastChatStorageKey, c.id); } catch { }
                        setSelectedModelId(c.modelId || null);
                        setSelectedModelName(c.modelName || null);
                        setSelectedModelLogo(c.providerLogoUrl || null);
                        await loadSelectedModelConfig(c.modelId);
                        // fetch explicitly for this chat id (state update is async)
                        setHistoryLoading(true);
                        try {
                          const page = await apiGet(`/chat/${c.id}/messages/page?page=1&pageSize=${historyLimit}&order=desc`);
                          const arr = Array.isArray(page) ? page : [];
                          const asc = arr.slice().reverse().map(normalizeMessage);
                          setMessages(asc);
                        } catch (e) {
                          setErrorBanner({ message: e?.message || "Failed to load chat history." });
                        } finally {
                          setHistoryLoading(false);
                        }
                      }}
                      sx={{
                        px: 1.5,
                        py: 1.2,
                        borderRadius: 1,
                        cursor: "pointer",
                        backgroundColor: c.id === chatId ? "#e0f2f1" : "transparent",
                        "&:hover": { backgroundColor: "#eaecef" },
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1 }}>
                        <Typography sx={{ fontSize: 13, fontWeight: 700 }}>
                          {c.title || "Chat"}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            setDeletingChat(c);
                            setConfirmDeleteOpen(true);
                          }}
                          aria-label="Delete chat"
                        >
                          <MdDeleteOutline />
                        </IconButton>
                      </Box>
                      <Typography sx={{ fontSize: 12, color: "#6a7074" }}>
                        {c.modelName ? `Model: ${c.modelName}` : "No model"}
                      </Typography>
                    </Box>
                  ))
                )}
              </Box>
            </Box>
          )} */}



          {/* Right: chat area */}
          <Box sx={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
            {/* ================= HEADER ================= */}
            <Box
              sx={{
                px: 3,
                py: 2,
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* {!historyOpen && (
                <Box sx={{ width: 44, borderRight: "1px solid #e0e0e0", backgroundColor: "#f4f5f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <IconButton size="small" onClick={() => setHistoryOpen(true)} aria-label="Expand history">
                    <MdChevronRight />
                  </IconButton>
                </Box>
              )} */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }} >
                {/* Left */}


                <Box onClick={() => setAiModel(true)} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <img src={selectedModelLogo || gpt} alt="Model" width={40} />
                  <Typography variant="h6" fontWeight="bold">
                    {selectedModelName || "GPT-4o"} {!selectedModelName && <span style={{ color: "#8a8a8a" }}>(Default)</span>}
                  </Typography>
                  <span className="w-6 h-6 bg-maincolor flex items-center justify-center rounded-full text-white">
                    <ChevronDown fontSize={6} />
                  </span>
                </Box>

                {/* Right */}
                <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                  {!hideModeToggle && (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography sx={{ fontSize: 12, color: "#6a7074", fontWeight: 800 }}>
                        Mode
                      </Typography>
                      <Button
                        size="small"
                        variant={playgroundMode === "STANDARD" ? "contained" : "outlined"}
                        sx={{
                          textTransform: "none",
                          minWidth: 92,
                          backgroundColor: playgroundMode === "STANDARD" ? "#02b499" : "transparent",
                          borderColor: "#02b499",
                          color: playgroundMode === "STANDARD" ? "#fff" : "#02b499",
                          "&:hover": { backgroundColor: playgroundMode === "STANDARD" ? "#00b894" : "rgba(2,180,153,0.08)" },
                        }}
                        onClick={() => setPlaygroundMode("STANDARD")}
                        disabled={sendMessage.isPending}
                      >
                        Standard
                      </Button>
                      <Button
                        size="small"
                        variant={playgroundMode === "TRAINED" ? "contained" : "outlined"}
                        sx={{
                          textTransform: "none",
                          minWidth: 92,
                          backgroundColor: playgroundMode === "TRAINED" ? "#111" : "transparent",
                          borderColor: "#111",
                          color: playgroundMode === "TRAINED" ? "#fff" : "#111",
                          "&:hover": { backgroundColor: playgroundMode === "TRAINED" ? "#000" : "rgba(0,0,0,0.06)" },
                        }}
                        onClick={() => setPlaygroundMode("TRAINED")}
                        disabled={sendMessage.isPending}
                        title="Trained runs intents/tools/RAG/guardrails"
                      >
                        Trained
                      </Button>
                    </Box>
                  )}
                  <Typography
                    sx={{ color: "#8a8a8a", display: "flex", gap: 1, alignItems: "center", cursor: chatId ? "pointer" : "default" }}
                    onClick={() => {
                      if (!chatId) return;
                      setConfirmClearOpen(true);
                    }}
                    title={!chatId ? "Select a chat to clear" : "Clear messages in this chat"}
                  >
                    <PiPaintBrushHouseholdLight /> Clear
                  </Typography>
                  <Typography sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <VscGitCompare /> Compare mode
                  </Typography>
                  {showOrchestrationInspector && forcedMode === "TRAINED" && (
                    <Typography
                      onClick={() => setOrchestrationOpen(true)}
                      sx={{
                        display: "flex",
                        gap: 1,
                        alignItems: "center",
                        cursor: latestOrchestration ? "pointer" : "default",
                        color: latestOrchestration ? "#111" : "#b0b0b0",
                      }}
                      title={!latestOrchestration ? "No orchestration metadata yet" : "View trained orchestration details"}
                    >
                      <FaBarsProgress /> Orchestration
                    </Typography>
                  )}
                  <Typography onClick={handleMenuClick} sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <FaBarsProgress /> Configuration
                  </Typography>
                  {/* Trigger button */}
                  <Typography
                    onClick={handleHistClick}
                    sx={{ display: "flex", gap: 1, alignItems: "center", cursor: "pointer" }}
                  >
                    <History /> Chat history
                  </Typography>

                  {/* Popup Menu */}
                  <Menu
                    id="historyMenu"
                    className="newpopup"
                    anchorEl={anchorElHist}
                    open={historyOpen}
                    onClose={handleHistClose}
                    disableAutoFocusItem
                    MenuListProps={{ onClick: (e) => e.stopPropagation() }}
                    PaperProps={{
                      sx: {
                        width: 300,
                        maxHeight: 400,
                        px: 2,
                        py: 1.5,
                        borderRadius: 2,
                        boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
                        display: "flex",
                        flexDirection: "column",
                        top: "80px"
                      },
                    }}
                  >
                    {/* New Chat & Clear Buttons */}
                    <Box sx={{ mb: 1 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{ textTransform: "none", backgroundColor: "#5234c9", "&:hover": { backgroundColor: "#5234c9" } }}
                        onClick={() => {
                          setAiModel(true);
                          handleHistClose();
                        }}
                      >
                        New chat
                      </Button>

                      {forcedMode === "TRAINED" && (
                        <Button
                          fullWidth
                          variant="text"
                          sx={{ mt: 0.5, textTransform: "none", color: "#6a7074" }}
                          onClick={() => setConfirmClearHistoryOpen(true)}
                          disabled={clearHistory.isPending || chats.length === 0}
                        >
                          {clearHistory.isPending ? "Clearing history..." : "Clear history"}
                        </Button>
                      )}
                    </Box>

                    {/* Scrollable Chat List */}
                    <Box sx={{ flex: 1, overflowY: "auto", mt: 1 }}>
                      {chats.length === 0 ? (
                        <Typography sx={{ color: "#6a7074", fontSize: 13, px: 1 }}>
                          No chats yet.
                        </Typography>
                      ) : (
                        chats.map((c) => (
                          <Box
                            key={c.id}
                            onClick={async () => {
                              setChatId(c.id);
                              setSelectedModelId(c.modelId || null);
                              setSelectedModelName(c.modelName || null);
                              handleHistClose();

                              if (loadSelectedModelConfig) await loadSelectedModelConfig(c.modelId);

                              // Load messages
                              setHistoryLoading?.(true);
                              try {
                                const page = await apiGet(`/chat/${c.id}/messages/page?page=1&pageSize=${historyLimit}&order=desc`);
                                const arr = Array.isArray(page) ? page : [];
                                setMessages(arr.slice().reverse().map(normalizeMessage));
                              } catch (e) {
                                setErrorBanner?.({ message: e?.message || "Failed to load chat history." });
                              } finally {
                                setHistoryLoading?.(false);
                              }
                            }}
                            sx={{
                              px: 1.5,
                              py: 1,
                              borderRadius: 1,
                              cursor: "pointer",
                              backgroundColor: c.id === chatId ? "#4f46e526" : "transparent",
                              "&:hover": { backgroundColor: "#463aff26" },
                              mb: 0.5,
                            }}
                          >
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <Typography sx={{ fontSize: 13, fontWeight: 700 }}>{c.title || "Chat"}</Typography>
                              <IconButton
                                size="small"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setDeletingChat(c);
                                  setConfirmDeleteOpen(true);
                                }}
                              >
                                <MdDeleteOutline />
                              </IconButton>
                            </Box>
                            <Typography sx={{ fontSize: 12, color: "#6a7074" }}>
                              {c.modelName ? `Model: ${c.modelName}` : "No model"}
                            </Typography>
                          </Box>
                        ))
                      )}
                    </Box>
                  </Menu>

                  <Menu
                    id="newpopup" className="newpopup"
                    anchorEl={anchorEl}
                    open={menuOpen}
                    onClose={handleMenuClose}
                    disableAutoFocusItem
                    MenuListProps={{
                      onClick: (e) => e.stopPropagation(),
                    }}
                    PaperProps={{
                      sx: {
                        width: 450,
                        px: 4,
                        py: 3,
                        borderRadius: 2,
                        boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
                      },
                    }}
                  >
                    {/* API KEY */}
                    <Box sx={{ mb: 3 }}>
                      {/* <Typography fontSize={13} mb={1}>
                  API Key
                </Typography> */}

                      <TextField
                        fullWidth
                        size="small"
                        sx={{
                          backgroundColor: "#f4f5f6",
                          borderRadius: 1,
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                            "&:hover fieldset": {
                              border: "none",
                            },
                            "&.Mui-focused fieldset": {
                              border: "none",
                            },
                          },
                        }}
                        placeholder="Enter API Key"
                        type={showKey ? "text" : "password"}
                        InputProps={{
                          endAdornment: (
                            <IconButton onClick={() => setShowKey(!showKey)}>
                              {showKey ? <MdVisibilityOff /> : <MdVisibility />}
                            </IconButton>
                          ),
                        }}
                      />
                    </Box>

                    {/* Temperature */}
                    <Box sx={{ mb: 1 }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography fontSize={14}>Temperature</Typography>
                        <Typography fontSize={14}>1</Typography>
                      </Box>
                      <Slider
                        defaultValue={1}
                        min={0}
                        max={2}
                        step={0.1}
                        sx={{ color: "#5234c9" }}
                      />
                    </Box>

                    {/* Top P */}
                    <Box sx={{ mb: 1 }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography fontSize={14}>Top P</Typography>
                        <Typography fontSize={14}>1</Typography>
                      </Box>
                      <Slider
                        defaultValue={1}
                        min={0}
                        max={1}
                        step={0.05}
                        sx={{ color: "#5234c9" }}
                      />
                    </Box>

                    {/* Max Tokens */}
                    <Box sx={{ mb: 1 }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography fontSize={14}>Max tokens</Typography>
                        <Typography fontSize={14}>16384</Typography>
                      </Box>
                      <Slider
                        defaultValue={16384}
                        min={256}
                        max={32768}
                        step={256}
                        sx={{ color: "#5234c9" }}
                      />
                    </Box>

                    <Typography fontSize={12} color="gray">
                      Note: Token usage includes both input and output. Very low token limits may prevent the model from generating a response.              </Typography>

                    {/* Footer buttons */}

                  </Menu>

                  {/* Orchestration inspector (TRAINED only) */}
                  <Dialog
                    className="modelpopup"
                    open={orchestrationOpen}
                    onClose={() => setOrchestrationOpen(false)}
                    maxWidth="md"
                    fullWidth
                  >
                    <DialogTitle>Orchestration (Pre-Trained)</DialogTitle>
                    <DialogContent dividers>
                      {!latestOrchestration ? (
                        <Typography color="text.secondary">
                          No orchestration metadata yet. Send a message in Pre-Trained mode first.
                        </Typography>
                      ) : (
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                          <Box>
                            <Typography sx={{ fontWeight: 800, mb: 0.5 }}>Intent</Typography>
                            <Typography sx={{ fontSize: 13 }}>
                              {latestOrchestration?.intent?.matched
                                ? `${latestOrchestration?.intent?.name || "matched"} (score ${latestOrchestration?.intent?.score ?? "-"})`
                                : "No matched intent"}
                            </Typography>
                          </Box>

                          <Box>
                            <Typography sx={{ fontWeight: 800, mb: 0.5 }}>Tools</Typography>
                            <Typography sx={{ fontSize: 13, color: "#6a7074", mb: 1 }}>
                              {Array.isArray(latestOrchestration?.tools) ? `${latestOrchestration.tools.length} run(s)` : "0 run(s)"}
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                              {(Array.isArray(latestOrchestration?.tools) ? latestOrchestration.tools : []).map((t, idx) => (
                                <Box key={idx} sx={{ border: "1px solid #e6e6e6", borderRadius: 1, p: 1.25 }}>
                                  <Typography sx={{ fontWeight: 700, fontSize: 13 }}>
                                    {t?.tool || "tool"} — {t?.status || "UNKNOWN"} {t?.fromCache ? "(cache)" : ""}
                                  </Typography>
                                  {t?.missingParams && (
                                    <Typography sx={{ fontSize: 12, color: "#b45309" }}>
                                      missing: {String(t.missingParams)}
                                    </Typography>
                                  )}
                                  {t?.error && (
                                    <Typography sx={{ fontSize: 12, color: "#b91c1c" }}>
                                      error: {String(t.error)}
                                    </Typography>
                                  )}
                                  {t?.params && (
                                    <Typography sx={{ fontSize: 12, color: "#374151", whiteSpace: "pre-wrap" }}>
                                      params: {formatJson(t.params)}
                                    </Typography>
                                  )}
                                </Box>
                              ))}
                            </Box>
                          </Box>

                          <Box>
                            <Typography sx={{ fontWeight: 800, mb: 0.5 }}>Latency</Typography>
                            <Typography sx={{ fontSize: 13 }}>
                              {typeof latestOrchestration?.latencyMs === "number"
                                ? `${latestOrchestration.latencyMs} ms`
                                : "-"}
                            </Typography>
                          </Box>

                          <Box>
                            <Typography sx={{ fontWeight: 800, mb: 0.5 }}>Raw JSON</Typography>
                            <TextField
                              value={formatJson(latestOrchestration)}
                              fullWidth
                              multiline
                              minRows={10}
                              sx={{ backgroundColor: "#f8fafc" }}
                            />
                          </Box>
                        </Box>
                      )}
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => setOrchestrationOpen(false)} sx={{ textTransform: "none" }}>
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>

                </Box>
              </div>
            </Box>

            {/* ================= CENTER ================= */}
            <div
              className="flex-1 overflow-y-auto px-4"
              // sx={{
              //   flex: 1,
              //   display: "flex",
              //   flexDirection: "column",
              //   justifyContent: "flex-start",
              //   gap: 2,
              //   px: 3,
              //   py: 2,
              //   // overflowY: "auto",
              // }}
              ref={scrollRef}
              onScroll={handleScroll}
            >
              {!textAllowed && (
                <div className="max-w-2xl mx-auto py-6 space-y-4"
                // sx={{ width: "100%", maxWidth: 900, mx: "auto", mt: 2, mb: 1, p: 1.5, borderRadius: 2, border: "1px solid #ffe0b2", backgroundColor: "#fff8e1" }}
                >
                  <div className="px-4 py-3 rounded-2xl max-w-[90%] text-sm"
                  >
                    This model is configured with Text disabled. Phase 1 supports text-only chat. Please enable Text input/output in Model Details.
                  </div>
                </div>
              )}
              {messages.length === 0 ? (
                // <Typography variant="h4" fontWeight="bold" sx={gradientText}>
                //   What can I help with?
                // </Typography>
                <div className="w-full  text-center">

                  {/* Headings */}
                  {/* <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-800">
                    Good Morning
                  </h1> */}

                  <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    What can I help with?
                  </h2>

                  {/* <p className="mt-5 text-gray-500 text-sm sm:text-base">
                    Subscribe now and start exploring the playground
                  </p> */}



                </div>
              ) : (
                <Box sx={{ width: "100%", maxWidth: 900, mx: "auto", display: "flex", flexDirection: "column", gap: 2 }}>
                  {!isNearBottom && (
                    <Box sx={{ display: "flex", justifyContent: "center", position: "sticky", top: 10, zIndex: 2 }}>
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => scrollToBottom("smooth")}
                        sx={{ textTransform: "none", backgroundColor: "#111", "&:hover": { backgroundColor: "#000" } }}>
                        New messages ↓
                      </Button>
                    </Box>
                  )}
                  <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
                    <Button
                      variant="text"
                      disabled={historyLoading || !chatId}
                      sx={{ textTransform: "none", color: "#5234c9" }}
                      onClick={() => setHistoryLimit((n) => Math.min(2000, n + 200))}
                    >
                      {historyLoading ? "Loading history..." : `Load older (+200)`}
                    </Button>
                  </Box>
                  {messages.map((m) => (
                    <Box key={m.id} sx={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                      <Box sx={{
                        maxWidth: "100%",
                        // width: "100%",
                        px: 2,
                        py: 1.5,
                        borderRadius: 2,
                        backgroundColor: m.role === "user" ? "#e8f5e9" : "#f4f5f6",
                        border: "1px solid #e0e0e0",
                        whiteSpace: "pre-wrap",
                      }}>
                        {m.role === "assistant"
                          ? <MarkdownMessage content={m.content} />
                          : <Typography sx={{ fontSize: 14, whiteSpace: "pre-wrap" }}>{m.content}</Typography>}
                        {m.role === "assistant" && m.truncatedByMaxOutputTokens && (
                          <Typography sx={{ fontSize: 12, color: "#8a4b00", mt: 0.75 }}>
                            Response truncated due to Max output tokens. Increase it in Model Details for this model.
                          </Typography>
                        )}
                        {m.role !== "user" && m.usageLabel && (
                          <Typography sx={{ fontSize: 12, color: "#8a8a8a", mt: 0.75 }}>
                            {m.usageLabel}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  ))}
                  <div ref={bottomRef} />
                </Box>
              )}

            </div>

            {/* ================= BOTTOM INPUT ================= */}
            <div className={`fixed relative inset-0 flex flex-col items-center px-4 transition-all duration-300 ${prompt.trim() || messages.length > 0
              ? "justify-end pb-6"
              : "justify-center"
              }`}
            // sx={{
            //   width: "800px",
            //   marginLeft: "auto",
            //   marginRight: "auto",
            //   marginTop: "20px"
            // }}
            // className="mt-12 absolute bottom-[-20px] left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md border
            //            border-gray-200 rounded-2xl shadow-chatboxshadow
            //             p-[1px] transition-all  bg-gradient-to-r from-[#fcfcfc] to-[#FFF5F5]  w-[90%] sm:w-[80%] lg:w-[800px] 
            //   mx-auto mt-5"
            // sx={{
            //   position: "sticky",
            //   bottom: 0,
            //   width: "100%",
            //   // background: "rgba(255,255,255,0.9)",
            //   // backdropFilter: "blur(8px)",
            //   // borderTop: "1px solid #e5e7eb",
            //   p: 2,
            // }}
            >

              {/* <Typography sx={{ color: "#5234c9ff", textAlign: "center", fontSize: "15px", margin: "20px 0px" }}>
            Subscribe now and start exploring the playground
          </Typography> */}
              <div className="w-full max-w-2xl"
              >
                {/* Context usage (like ChatGPT) */}
                {/* {(() => {
                  const cu = getLatestContextUsage();
                  if (!cu) return null;
                  const pct = `${cu.usedPct.toFixed(1)}%`;
                  return (
                    <Typography sx={{ fontSize: 12, color: "#6a7074", mb: 0.75 }}>
                      {pct} · {formatTokenCount(cu.usedTokens)} / {formatTokenCount(cu.limitTokens)} context used
                    </Typography>
                  );
                })()} */}

                {/* Error / rate-limit banner (above input box) */}
                {(errorBanner || rateLimit) && (
                  <div
                    sx={{
                      width: "100%",
                      mb: 1,
                      p: 1.25,
                      borderRadius: 2,
                      border: "1px solid " + (errorBanner ? "#ffcdd2" : "#ffe0b2"),
                      backgroundColor: errorBanner ? "#ffebee" : "#fff8e1",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 1,
                    }}
                  >
                    <Typography sx={{ fontSize: 13, color: errorBanner ? "#b71c1c" : "#8a4b00", pr: 1 }}>
                      {errorBanner
                        ? errorBanner.message
                        : `${rateLimit?.message || "Rate limit exceeded."}${rateLimit?.secondsLeft ? ` Retry in ${rateLimit.secondsLeft}s.` : ""}`}
                    </Typography>
                    <IconButton
                      size="small"
                      aria-label="Dismiss message"
                      onClick={() => {
                        if (errorBanner) setErrorBanner(null);
                        if (rateLimit) setRateLimit(null);
                      }}
                      sx={{ mt: "-2px" }}
                    >
                      <MdClose />
                    </IconButton>
                  </div>
                )}

                {/* Modality chips driven by model config */}
                {/* <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, mb: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                    <Typography sx={{ fontSize: 12, color: "#6a7074", fontWeight: 700 }}>Input:</Typography>
                    {["text", "images", "audio", "video", "embeddings"].map((m) => {
                      const configured = inputModalities.includes(m);
                      const supported = SUPPORTED_INPUT_MODALITIES.includes(m);
                      const active = configured;
                      return (
                        <Box
                          key={`in-${m}`}
                          sx={{
                            px: 1,
                            py: 0.3,
                            borderRadius: 10,
                            fontSize: 12,
                            border: "1px solid " + (active ? "#5234c9" : "#d0d7df"),
                            backgroundColor: active ? "#ece7ff" : "#ffffff",
                            color: !supported && active ? "#b71c1c" : "#111",
                          }}
                          title={!supported && active ? "Configured but not supported by current adapters (Phase 1 text-only)" : undefined}
                        >
                          {m}
                        </Box>
                      );
                    })}
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                    <Typography sx={{ fontSize: 12, color: "#6a7074", fontWeight: 700 }}>Output:</Typography>
                    {["text", "images", "audio", "video"].map((m) => {
                      const configured = outputModalities.includes(m);
                      const supported = SUPPORTED_OUTPUT_MODALITIES.includes(m);
                      const active = configured;
                      return (
                        <Box
                          key={`out-${m}`}
                          sx={{
                            px: 1,
                            py: 0.3,
                            borderRadius: 10,
                            fontSize: 12,
                            border: "1px solid " + (active ? "#5234c9" : "#d0d7df"),
                            backgroundColor: active ? "#ece7ff" : "#ffffff",
                            color: !supported && active ? "#b71c1c" : "#111",
                          }}
                          title={!supported && active ? "Configured but not supported by current adapters (Phase 1 text-only)" : undefined}
                        >
                          {m}
                        </Box>
                      );
                    })}
                  </Box>
                </Box> */}

                <div className="sticky bottom-0 bg-[#f7f7f8]/80 backdrop-blur-md ">
                  <div className="max-w-2xl mx-auto">
                    <div className="flex items-end bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                      {/* <Mic /> */}
                      <Plus className="w-5 h-5 text-gray-400 mr-3 mb-2" />
                      <textarea
                        rows={1}
                        className="w-full bg-transparent resize-none outline-none text-gray-800 placeholder-gray-400 text-sm sm:text-base"
                        placeholder="Ask anything"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault(); // stop newline

                            if (!prompt.trim()) return;

                            // 👉 call your send function here
                            handleSendMessage();
                          }
                        }}

                      />
                      <div className="flex justify-end mt-2">
                        <Button
                          className="ml-2 p-2 rounded-full bg-black text-white"
                          variant="contained"
                          disabled={
                            !prompt.trim() ||
                            sendMessage.isPending ||
                            Boolean(rateLimit) ||
                            !textAllowed ||
                            !(chatId || selectedModelId)
                          }
                          sx={{
                            color: "#fefdfdff",
                            backgroundColor: !prompt.trim() || rateLimit || !textAllowed || !(chatId || selectedModelId)
                              ? "#5234c9"
                              : "#5234c9",
                            textTransform: "none",
                            borderRadius: "10px"

                          }}
                          title={
                            !textAllowed
                              ? "Text input/output is disabled in Model Details for this model."
                              : (!(chatId || selectedModelId) ? "Select a model (or open a chat) to run." : undefined)
                          }
                          onClick={() => {
                            if (rateLimit) return;
                            setErrorBanner(null);
                            if (!chatId && selectedModelId) {
                              createChat.mutate({ modelId: selectedModelId, mode: effectiveMode }, {
                                onSuccess: () => sendMessage.mutate(prompt),
                              });
                            } else {
                              // optimistic append (keeps UI responsive)
                              const tmpUserId = `tmp-user-${Date.now()}`;
                              const tmpAsstId = `tmp-asst-${Date.now()}`;
                              setMessages((prev) => [
                                ...prev,
                                normalizeMessage({ id: tmpUserId, role: "user", content: prompt, createdAt: new Date().toISOString(), metadataJson: null, _pending: true }),
                                normalizeMessage({ id: tmpAsstId, role: "assistant", content: "…", createdAt: new Date().toISOString(), metadataJson: null, _pending: true }),
                              ]);
                              sendMessage.mutate(prompt);
                            }
                          }}
                        >
                          <Send size={30} style={{ marginRight: "6px" }} />
                          {rateLimit ? `Wait (${rateLimit.secondsLeft}s)` : (sendMessage.isPending ? "Running..." : "Run")}
                        </Button>
                      </div>
                    </div>
                    {/* <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                      <div className="flex gap-3 flex-wrap">
                        {/* <button className="px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 rounded-full flex items-center gap-2 transition shadow-cardbtn">
                          <Paperclip size={16} />  Attachment
                        </button> 

                    {/* <button className="px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 rounded-full flex items-center gap-2 transition shadow-cardbtn">
                          <TbMapSearch size={16} />
                          Deep Research
                        </button> 
                  </div>

                  {/* <button className="px-7 py-2.5 text-sm font-medium text-white rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-[0_8px_25px_rgba(124,58,237,0.45)] hover:shadow-[0_10px_30px_rgba(124,58,237,0.6)] transition-all duration-300">
                        Generate
                      </button> 

                </div> */}
                  </div>
                  {/* <CiCirclePlus style={{ color: "#cacdd2" }} size={50} /> */}
                  {/* <TextField
                    fullWidth
                    placeholder="Ask anything"
                    variant="outlined"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    disabled={
                      !prompt.trim() ||
                      sendMessage.isPending ||
                      Boolean(rateLimit) ||
                      !textAllowed ||
                      !(chatId || selectedModelId)
                    }
                    sx={{
                      color: "#fefdfdff",
                      backgroundColor: !prompt.trim() || rateLimit || !textAllowed || !(chatId || selectedModelId)
                        ? "#f8e6f8ff"
                        : "#02b499",
                      boxShadow: "none",
                      textTransform: "none",
                    }}
                    title={
                      !textAllowed
                        ? "Text input/output is disabled in Model Details for this model."
                        : (!(chatId || selectedModelId) ? "Select a model (or open a chat) to run." : undefined)
                    }
                    onClick={() => {
                      if (rateLimit) return;
                      setErrorBanner(null);
                      if (!chatId && selectedModelId) {
                        createChat.mutate({ modelId: selectedModelId, mode: effectiveMode }, {
                          onSuccess: () => sendMessage.mutate(prompt),
                        });
                      } else {
                        // optimistic append (keeps UI responsive)
                        const tmpUserId = `tmp-user-${Date.now()}`;
                        const tmpAsstId = `tmp-asst-${Date.now()}`;
                        setMessages((prev) => [
                          ...prev,
                          normalizeMessage({ id: tmpUserId, role: "user", content: prompt, createdAt: new Date().toISOString(), metadataJson: null, _pending: true }),
                          normalizeMessage({ id: tmpAsstId, role: "assistant", content: "…", createdAt: new Date().toISOString(), metadataJson: null, _pending: true }),
                        ]);
                        sendMessage.mutate(prompt);
                      }
                    }}
                  >
                    <IoMdPlay size={30} style={{ marginRight: "6px" }} />
                    {rateLimit ? `Wait (${rateLimit.secondsLeft}s)` : (sendMessage.isPending ? "Running..." : "Run")}
                  </Button> */}

                </div>
              </div>

              {/* Confirm clear */}
              <Dialog open={confirmClearOpen} onClose={() => setConfirmClearOpen(false)} className="modelpopup">
                <DialogTitle>Clear chat?</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    This will delete all messages in the current chat. The chat will remain in the history list.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setConfirmClearOpen(false)}>Cancel</Button>
                  <Button
                    variant="contained"
                    onClick={() => clearChat.mutate()}
                    disabled={clearChat.isPending}
                    sx={{ backgroundColor: "#02b499", "&:hover": { backgroundColor: "#00b894" } }}
                  >
                    {clearChat.isPending ? "Clearing..." : "Clear"}
                  </Button>
                </DialogActions>
              </Dialog>

              {/* Confirm clear history (Pre-Trained only) */}
              <Dialog open={confirmClearHistoryOpen} onClose={() => setConfirmClearHistoryOpen(false)}
                className="modelpopup">
                <DialogTitle>Clear chat history?</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    This will delete all chats in Pre-Trained mode and remove them from the history list.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setConfirmClearHistoryOpen(false)}>Cancel</Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => clearHistory.mutate()}
                    disabled={clearHistory.isPending}
                  >
                    {clearHistory.isPending ? "Clearing..." : "Clear history"}
                  </Button>
                </DialogActions>
              </Dialog>

              {/* Confirm delete */}
              <Dialog open={confirmDeleteOpen} onClose={() => setConfirmDeleteOpen(false)} className="modelpopup">
                <DialogTitle>Delete chat?</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    This will delete the chat and all its messages permanently.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setConfirmDeleteOpen(false)}>Cancel</Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteChat.mutate(deletingChat?.id)}
                    disabled={deleteChat.isPending}
                  >
                    {deleteChat.isPending ? "Deleting..." : "Delete"}
                  </Button>
                </DialogActions>
              </Dialog>
            </div>

            <Dialog
              className="modelpopup"
              open={aiModel}
              maxWidth="md"
              fullWidth
              PaperProps={{
                sx: {
                  overflow: "hidden",
                },
              }}
            >
              {/* Header */}
              <DialogTitle>
                <Typography variant="h6" fontWeight="bold">Select Model</Typography>
              </DialogTitle>

              <Divider />

              {/* Body */}
              <Box >

                {/* Left Sidebar */}
                <Box className="chat-pop-left1 bg-white flex flex-row gap-2 p-4"
                // sx={{
                //   width: 220,
                //   borderRight: "1px solid #e0e0e0",
                //   backgroundColor: "#F4F5F6",
                //   p: 2,
                //   gap: 2
                // }}
                >
                  {[
                    { step: "01", label: "Provider", active: true },
                    { step: "02", label: "Models" },
                    { step: "03", label: "Compute" },
                    { step: "04", label: "Billing type" }
                  ].map((item) => (
                    <Box
                      key={item.step}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        color: item.active ? "#5234c9" : "#666",
                        backgroundor: item.active ? "#F7F4FF" : "#fff",
                        fontWeight: item.active ? "bold" : "normal",
                        padding: "10px 20px",
                        border: `1px solid ${item.active ? "#5234c9" : "#C8C8C8"}`,
                        borderRadius: "8px",

                      }}
                    >
                      <Typography sx={{ width: 30 }}>
                        {item.step}
                      </Typography>
                      <Typography fontWeight="bold" >{item.label}</Typography>
                    </Box>
                  ))}
                </Box>

                {/* Right Content */}
                <Box
                  className="rightpart grid grid-cols-3 gap-3 p-6"
                // sx={{
                //   flex: 1,
                //   p: 3,
                //   overflowY: "auto"
                // }}
                >
                  {noSelectableModels ? (
                    <Box sx={{ p: 2 }}>
                      <Typography sx={{ fontWeight: 800, mb: 1 }}>
                        {forcedMode === "TRAINED" ? "No trained setups found" : "No standard models found"}
                      </Typography>
                      <Typography sx={{ color: "#6a7074", fontSize: 14 }}>
                        {forcedMode === "TRAINED"
                          ? "Create a trained model from Model Training first, then come back to Pre-Trained Playground."
                          : "Add a base model in Model Catalog first, then come back to Standard Playground."}
                      </Typography>
                    </Box>
                  ) : (
                    selectableModels.map((model) => (
                      <Box
                        key={model.id}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          padding: "15px 25px",
                          borderRadius: 2,
                          border: `1px solid #C8C8C8`,
                          cursor: "pointer",
                          "&:hover": {
                            backgroundColor: "#f5f5f5",
                          },
                        }}
                        onClick={() => {
                          setSelectedModelId(model.id);
                          setSelectedModelName(model.name);
                          // backend provides provider logo URL; fall back to existing mapping by providerName
                          setSelectedModelLogo(model.providerLogoUrl || gpt);
                        }}
                      >
                        <img
                          src={model.providerLogoUrl || gpt}
                          alt={model.name}
                          style={{ width: 40, height: 40, objectFit: "contain" }}
                        />
                        <Typography fontWeight="bold" fontSize="18px" variant="h6">{model.name}</Typography>
                      </Box>
                    ))
                  )}

                </Box>
              </Box>



              {/* Footer */}
              <DialogActions sx={{ p: 2 }}>
                <Button variant="contained" sx={{ backgroundColor: "#e0e0e0", color: "#a6a6ae" }} onClick={() => setAiModel(false)} >Cancel</Button>
                <Button variant="contained" onClick={() => {
                  setAiModel(false);
                  if (selectedModelId) {
                    setChatId(null);
                    createChat.mutate({ modelId: selectedModelId, mode: effectiveMode });
                  }
                }} disabled={!selectedModelId}>
                  Apply
                </Button>
              </DialogActions>
            </Dialog>



          </Box>
        </Box>
      </Box >
    </div >
  );
};

export default Chat;
