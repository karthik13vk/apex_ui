import React from 'react'

const Breadcrumb = ({ title, subtitle }) => {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        <p className="text-sm text-secondarycolor font-semibold">{subtitle}</p>
      </div>
    </div>
  )
}

export default Breadcrumb