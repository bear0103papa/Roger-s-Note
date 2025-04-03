import React, { useEffect, useState } from "react"

const LanguageToggle = () => {
  const [activeMode, setActiveMode] = useState("both")
  const [hasBilingualContent, setHasBilingualContent] = useState(false)

  // 將函數定義移到 useEffect 之前
  const applyLanguageMode = (mode) => {
    const containers = document.querySelectorAll(".bilingual-container")
    
    containers.forEach(container => {
      const chineseColumns = container.querySelectorAll(".bilingual-column.chinese-column")
      const englishColumns = container.querySelectorAll(".bilingual-column.english-column")
      
      if (mode === "both") {
        container.style.gridTemplateColumns = "1fr 1fr"
        chineseColumns.forEach(col => col.style.display = "block")
        englishColumns.forEach(col => col.style.display = "block")
      } else if (mode === "chinese") {
        container.style.gridTemplateColumns = "1fr"
        chineseColumns.forEach(col => col.style.display = "block")
        englishColumns.forEach(col => col.style.display = "none")
      } else if (mode === "english") {
        container.style.gridTemplateColumns = "1fr"
        chineseColumns.forEach(col => col.style.display = "none")
        englishColumns.forEach(col => col.style.display = "block")
      }
    })
  }

  const handleModeChange = (mode) => {
    setActiveMode(mode)
    applyLanguageMode(mode)
    // 保存用戶偏好到 localStorage
    localStorage.setItem("languagePreference", mode)
  }

  useEffect(() => {
    // 檢查頁面是否包含雙語內容
    const containers = document.querySelectorAll(".bilingual-container")
    setHasBilingualContent(containers.length > 0)
    
    // 如果有雙語內容，應用保存的偏好設置
    if (containers.length > 0) {
      const savedPreference = localStorage.getItem("languagePreference")
      if (savedPreference) {
        setActiveMode(savedPreference)
        applyLanguageMode(savedPreference)
      }
    }
  }, [])

  // 如果沒有雙語內容，不顯示切換按鈕
  if (!hasBilingualContent) {
    return null
  }

  // 添加內聯樣式，不依賴外部 CSS 文件
  const toggleStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "1rem 0 2rem",
    gap: "0.5rem",
  }

  const buttonStyle = {
    padding: "0.5rem 1rem",
    border: "1px solid #ccc",
    backgroundColor: "#f8f8f8",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.9rem",
    transition: "all 0.2s ease",
  }

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#0070f3",
    color: "white",
    borderColor: "#0070f3",
  }

  return (
    <div style={toggleStyle}>
      <button 
        style={activeMode === "both" ? activeButtonStyle : buttonStyle}
        onClick={() => handleModeChange("both")}
      >
        中英對照
      </button>
      <button 
        style={activeMode === "chinese" ? activeButtonStyle : buttonStyle}
        onClick={() => handleModeChange("chinese")}
      >
        僅中文
      </button>
      <button 
        style={activeMode === "english" ? activeButtonStyle : buttonStyle}
        onClick={() => handleModeChange("english")}
      >
        僅英文
      </button>
    </div>
  )
}

export default LanguageToggle