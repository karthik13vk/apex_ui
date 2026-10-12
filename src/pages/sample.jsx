    <div className="relative flex items-center justify-center min-h-screen p-4 gradient-background overflow-hidden">
      <ParticlesBg />
      <div className="grid w-full max-w-5xl overflow-hidden  shadow-lg rounded-3xl md:grid-cols-2 relative

          z-10
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          shadow-[0_10px_60px_rgba(0,0,0,0.6)] ">
        <div className="relative hidden p-10 text-white md:flex bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-400 text-white p-10">
          <div className="absolute w-4 h-4 text-4xl font-bold top-6 left-6 bg-red" />
          <div className="flex flex-col my-auto">
            <div className="flex items-center gap-4 mb-4">
              <div>
                <span className="flex items-center justify-center text-4xl font-semibold text-purple-500 bg-white h-16 w-16 rounded-md">
                  <img src={AppLogo} alt="Logo" className="w-14 h-14" />
                </span>
              </div>
              <div>
                <h4 className="text-3xl font-bold">APEX AI3</h4>
                <p>Enterprise AI Operations Platform</p>
              </div>
            </div>
            <div>
              <h2 className="pb-4 text-xl font-semibold leading-snug">
                {mode === "login"
                  ? "Sign in to run secure AI operations across your organization."
                  : "Create your workspace to launch governed AI services in minutes."}
              </h2>
              <p className="mb-3 text-sm opacity-90">Unified model catalog, providers, and deployment controls</p>
              <p className="mb-3 text-sm opacity-90">Secure chat and API playground with usage visibility</p>
              <p className="mb-3 text-sm opacity-90">Data pipelines, orchestration, and audit-ready governance</p>
              <br />
              <br />
            </div>
            {/* <p className="mb-3 text-sm opacity-60">
              {mode === "login"
                ? "Tip: Use the seeded admin credentials for the prototype"
                : "Registration attaches you to the default tenant (prototype)."}
            </p> */}
          </div>
        </div>

        <div className="p-8 md:p-12 relative bg-white/30 backdrop-blur-2xl flex-shrink-0">
          <div
            className=" w-full
                max-w-md
                rounded-[30px]
                border
                border-white/40
                bg-white/70
                backdrop-blur-3xl
                shadow-[0_8px_40px_rgba(255,255,255,0.18)]
                p-10">
          <div className="bubble w-10 h-10 bg-purple-300 left-10 animation-delay-0" />
          <div className="bubble w-6 h-6 bg-blue-300 left-1/3 animation-delay-2000" />
          <div className="bubble w-8 h-8 bg-indigo-300 left-2/3 animation-delay-4000" />
          <div className="bubble w-5 h-5 bg-purple-200 left-1/2 animation-delay-6000" />

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              {mode === "login" ? "Welcome to APEX AI3" : "Create your APEX workspace"}
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              {mode === "login"
                ? "Sign in to manage models, providers, data pipelines, and enterprise AI workflows."
                : "Register your organization and create a secure account to access the platform."}
            </p>
          </div>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          {info && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {info}
            </Alert>
          )}

          {mode === "login" ? (
            <Box component="form" onSubmit={onLogin} className="space-y-5" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                fullWidth
                autoComplete="username"
              />
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                fullWidth
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword((v) => !v)} edge="end" aria-label="toggle password visibility">
                        {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                className="w-full py-3 font-medium text-white transition duration-300 bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700"
              >
                {loading ? "Signing in..." : "Sign in"}
              </Button>
              <Divider sx={{ my: 1 }} />
              <Typography sx={{ color: "#6a7074", fontSize: 12, lineHeight: 1.6 }}>
                By continuing, you agree to the Terms of Service and Privacy Policy.
              </Typography>
              <p className="text-sm text-center text-gray-600">
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:underline bg-transparent border-0 cursor-pointer p-0"
                  onClick={() => switchMode("register")}
                >
                  Register
                </button>
              </p>
              {/* <button
                type="button"
                className="font-medium text-indigo-600 hover:underline bg-transparent border-0 cursor-pointer p-0 text-sm self-start"
                onClick={onResendVerification}
                disabled={loading}
              >
                Resend verification email
              </button> */}
            </Box>
          ) : (
            <Box
              component="form"
              onSubmit={onRegister}
              className="space-y-5"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxHeight: "70vh",
                overflowY: "auto",
                pr: 0.5,
              }}
            >
              <Typography variant="subtitle2" sx={{ color: "#6a7074", mt: 0.5 }}>
                Organization
              </Typography>
              <TextField
                label="Organization name"
                value={regOrgName}
                onChange={(e) => setRegOrgName(e.target.value)}
                fullWidth
                required
                autoComplete="organization"
              />
              <TextField
                label="Organization type (optional)"
                value={regOrgType}
                onChange={(e) => setRegOrgType(e.target.value)}
                fullWidth
                placeholder="e.g. Enterprise, SMB"
              />
              <Typography variant="subtitle2" sx={{ color: "#6a7074", mt: 1 }}>
                Your profile
              </Typography>
              <TextField
                label="Full name"
                value={regFullName}
                onChange={(e) => setRegFullName(e.target.value)}
                fullWidth
                required
                autoComplete="name"
              />
              <TextField
                label="Email"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                fullWidth
                autoComplete="email"
              />
              <TextField
                label="Phone number (optional)"
                value={regPhone}
                onChange={(e) => setRegPhone(e.target.value)}
                fullWidth
                autoComplete="tel"
              />
              <TextField
                label="Date of birth (optional)"
                type="date"
                value={regDob}
                onChange={(e) => setRegDob(e.target.value)}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                select
                label="Preferred language"
                value={regLanguage}
                onChange={(e) => setRegLanguage(e.target.value)}
                fullWidth
              >
                {LANGUAGES.map((l) => (
                  <MenuItem key={l.code} value={l.code}>
                    {l.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Address line 1"
                value={regAddr1}
                onChange={(e) => setRegAddr1(e.target.value)}
                fullWidth
                autoComplete="address-line1"
              />
              <TextField
                label="Address line 2"
                value={regAddr2}
                onChange={(e) => setRegAddr2(e.target.value)}
                fullWidth
                autoComplete="address-line2"
              />
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <TextField
                  label="City"
                  value={regCity}
                  onChange={(e) => setRegCity(e.target.value)}
                  sx={{ flex: 1, minWidth: 140 }}
                  autoComplete="address-level2"
                />
                <TextField
                  label="Region / State"
                  value={regRegion}
                  onChange={(e) => setRegRegion(e.target.value)}
                  sx={{ flex: 1, minWidth: 140 }}
                  autoComplete="address-level1"
                />
              </Box>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <TextField
                  label="Postal code"
                  value={regPostal}
                  onChange={(e) => setRegPostal(e.target.value)}
                  sx={{ flex: 1, minWidth: 140 }}
                  autoComplete="postal-code"
                />
                <TextField
                  label="Country"
                  value={regCountry}
                  onChange={(e) => setRegCountry(e.target.value)}
                  sx={{ flex: 1, minWidth: 140 }}
                  autoComplete="country-name"
                />
              </Box>
              <Typography variant="subtitle2" sx={{ color: "#6a7074", mt: 1 }}>
                Account
              </Typography>
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                fullWidth
                autoComplete="new-password"
                helperText="Minimum 8 characters"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword((v) => !v)} edge="end" aria-label="toggle password visibility">
                        {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Confirm password"
                type={showPassword ? "text" : "password"}
                value={regPassword2}
                onChange={(e) => setRegPassword2(e.target.value)}
                fullWidth
                autoComplete="new-password"
              />
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                className="w-full py-3 font-medium text-white transition duration-300 bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700"
              >
                {loading ? "Creating account..." : "Create account"}
              </Button>
              <Divider sx={{ my: 1 }} />
              <Typography sx={{ color: "#6a7074", fontSize: 12, lineHeight: 1.6 }}>
                By registering, you agree to the Terms of Service and Privacy Policy.
              </Typography>
              <p className="text-sm text-center text-gray-600">
                Already have an account?{" "}
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:underline bg-transparent border-0 cursor-pointer p-0"
                  onClick={() => switchMode("login")}
                >
                  Sign in
                </button>
              </p>
            </Box>
          )}

          {mode === "login" && (
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="px-4 text-sm text-gray-400">or continue with</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>
          )}
        </div>
      </div>
      </div>
    </div>