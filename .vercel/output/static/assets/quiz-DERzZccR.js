import{o as e}from"./useStore-DgTVU5_6.js";import{t}from"./SiteLayout-BVmd8M2T.js";var n=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
  <title>FICO Interview Questions</title>\r
  <style>\r
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }\r
\r
    :root {\r
      --purple-dark:  #02102b;\r
      --purple-mid:   #06265f;\r
      --purple-light: #0f4c81;\r
      --accent:       #38bdf8;\r
      --bg:           #02102b;\r
      --surface:      #ffffff;\r
      --border:       #d8e7f5;\r
      --text:         #0f172a;\r
      --text-muted:   #6b7280;\r
      --success:      #16a34a;\r
      --success-bg:   #f0fdf4;\r
      --success-bd:   #86efac;\r
      --danger:       #dc2626;\r
      --danger-bg:    #fff1f2;\r
      --danger-bd:    #fca5a5;\r
      --option-bg:    #f5faff;\r
      --option-hover: #e0f2fe;\r
      --radius:       14px;\r
      --shadow:       0 14px 36px rgba(0,0,0,0.28);\r
      --display-font: "Segoe UI Light", "Helvetica Neue", Arial, sans-serif;\r
    }\r
\r
    body {\r
      font-family: var(--display-font);\r
      background: var(--bg);\r
      color: var(--text);\r
      min-height: 100vh;\r
      display: flex;\r
      flex-direction: column;\r
      align-items: center;\r
      overflow-x: hidden;\r
      position: relative;\r
    }\r
\r
    .sap-bg {\r
      position: fixed;\r
      inset: 0;\r
      z-index: -1;\r
      overflow: hidden;\r
      pointer-events: none;\r
      background:\r
        linear-gradient(90deg, rgba(56,189,248,0.10) 1px, transparent 1px),\r
        linear-gradient(0deg, rgba(147,197,253,0.07) 1px, transparent 1px),\r
        radial-gradient(circle at 20% 20%, rgba(56,189,248,0.16), transparent 28%),\r
        radial-gradient(circle at 80% 10%, rgba(14,165,233,0.13), transparent 30%),\r
        #02102b;\r
      background-size: 48px 48px, 48px 48px, 100% 100%, 100% 100%;\r
      animation: ledgerGrid 16s linear infinite;\r
    }\r
\r
    .sap-bg::before,\r
    .sap-bg::after {\r
      content: "";\r
      position: absolute;\r
      inset: -20%;\r
      background:\r
        linear-gradient(115deg, transparent 0 43%, rgba(56,189,248,0.14) 44% 45%, transparent 46% 100%),\r
        linear-gradient(65deg, transparent 0 52%, rgba(147,197,253,0.10) 53% 54%, transparent 55% 100%);\r
      animation: accountFlow 18s linear infinite;\r
    }\r
\r
    .sap-bg::after {\r
      animation-duration: 26s;\r
      animation-direction: reverse;\r
      opacity: 0.55;\r
    }\r
\r
    .sap-chip {\r
      position: absolute;\r
      left: var(--x);\r
      top: 110%;\r
      min-width: 74px;\r
      border: 1px solid rgba(56,189,248,0.26);\r
      border-radius: 8px;\r
      padding: 0.45rem 0.7rem;\r
      background: rgba(255,255,255,0.10);\r
      color: rgba(226,242,255,0.58);\r
      font-size: 12px;\r
      font-weight: 900;\r
      letter-spacing: 0.08em;\r
      text-align: center;\r
      box-shadow: 0 10px 28px rgba(0,0,0,0.18);\r
      animation: ficoFloat var(--dur) linear infinite;\r
      animation-delay: var(--delay);\r
    }\r
\r
    .sap-chip:nth-child(2n) {\r
      border-color: rgba(147,197,253,0.22);\r
      color: rgba(219,234,254,0.58);\r
    }\r
\r
    @keyframes ledgerGrid {\r
      from { background-position: 0 0, 0 0, 0 0, 0 0; }\r
      to   { background-position: 48px 48px, -48px 48px, 0 0, 0 0; }\r
    }\r
\r
    @keyframes accountFlow {\r
      from { transform: translate3d(-6%, -4%, 0); }\r
      to   { transform: translate3d(6%, 4%, 0); }\r
    }\r
\r
    @keyframes ficoFloat {\r
      0%   { transform: translateY(0) rotate(-3deg); opacity: 0; }\r
      12%  { opacity: 1; }\r
      82%  { opacity: 1; }\r
      100% { transform: translateY(-125vh) rotate(4deg); opacity: 0; }\r
    }\r
\r
    /* ═══════════════════════════════\r
       HERO HEADER\r
    ═══════════════════════════════ */\r
    .quiz-hero {\r
      width: 100%;\r
      background: transparent;\r
      color: #fff;\r
      padding: 1.9rem 1.5rem 2rem;\r
      text-align: center;\r
      position: relative;\r
      z-index: 1;\r
    }\r
    .hero-logo {\r
      display: block;\r
      width: min(220px, 52vw);\r
      height: auto;\r
      margin: 0 auto 1.1rem;\r
      filter: drop-shadow(0 16px 30px rgba(0,0,0,0.35));\r
    }\r
    .quiz-hero h1 {\r
      font-size: clamp(44px, 7vw, 76px);\r
      font-family: var(--display-font);\r
      font-weight: 300;\r
      line-height: 0.98;\r
      letter-spacing: -0.04em;\r
      margin-bottom: 1rem;\r
      text-shadow: 0 18px 45px rgba(0,0,0,0.26);\r
    }\r
    .quiz-hero h1 strong {\r
      font-weight: 700;\r
    }\r
    .quiz-hero h1 .gold {\r
      display: inline;\r
      color: #ffcf43;\r
    }\r
    .quiz-hero .hero-sub {\r
      display: none;\r
    }\r
\r
    /* Progress bar inside hero */\r
    .hero-progress-track {\r
      width: 100%;\r
      max-width: 480px;\r
      height: 7px;\r
      background: rgba(255,255,255,0.2);\r
      border-radius: 99px;\r
      margin: 0 auto 0.6rem;\r
      overflow: hidden;\r
    }\r
    .hero-progress-fill {\r
      height: 100%;\r
      background: #fff;\r
      border-radius: 99px;\r
      transition: width 0.4s ease;\r
    }\r
    .hero-progress-label {\r
      font-size: 13px;\r
      font-weight: 600;\r
      opacity: 0.8;\r
    }\r
\r
    .hero-stats {\r
      display: flex;\r
      justify-content: center;\r
      gap: 0.65rem;\r
      margin-top: 0.85rem;\r
      flex-wrap: wrap;\r
    }\r
\r
    .hero-stat {\r
      min-width: 98px;\r
      border: 1px solid rgba(255,255,255,0.24);\r
      border-radius: 8px;\r
      padding: 0.45rem 0.75rem;\r
      background: rgba(255,255,255,0.12);\r
      backdrop-filter: blur(6px);\r
    }\r
\r
    .hero-stat-value {\r
      display: block;\r
      font-size: 18px;\r
      font-weight: 900;\r
      line-height: 1;\r
    }\r
\r
    .hero-stat-label {\r
      display: block;\r
      margin-top: 0.25rem;\r
      font-size: 10px;\r
      font-weight: 700;\r
      letter-spacing: 0.08em;\r
      opacity: 0.72;\r
    }\r
\r
    body.start-mode .hero-progress-track,\r
    body.start-mode .hero-progress-label,\r
    body.start-mode .hero-stats {\r
      display: none;\r
    }\r
\r
    body.start-mode .quiz-hero {\r
      padding: 0.8rem 1rem 0.7rem;\r
    }\r
\r
    body.start-mode .hero-logo {\r
      width: min(150px, 38vw);\r
      margin-bottom: 0.45rem;\r
    }\r
\r
    body.start-mode .quiz-hero h1 {\r
      font-size: clamp(34px, 5.4vw, 58px);\r
      margin-bottom: 0;\r
    }\r
\r
    /* ═══════════════════════════════\r
       CARD BODY\r
    ═══════════════════════════════ */\r
    .quiz-body {\r
      width: 100%;\r
      max-width: 660px;\r
      padding: 0 1rem 1rem;\r
      margin-top: -0.4rem;\r
      position: relative;\r
      z-index: 1;\r
    }\r
\r
    body.start-mode .quiz-body {\r
      max-width: 960px;\r
      margin-top: 0;\r
      padding-bottom: 1rem;\r
    }\r
\r
    .start-card {\r
      max-width: 960px;\r
      margin: 0 auto;\r
      border: 1px solid rgba(255,255,255,0.16);\r
      border-radius: 28px;\r
      padding: clamp(1.2rem, 3vw, 2rem);\r
      text-align: center;\r
      color: #fff;\r
      background:\r
        radial-gradient(circle at 50% 16%, rgba(37,99,235,0.20), transparent 34%),\r
        linear-gradient(135deg, rgba(255,255,255,0.13), rgba(255,255,255,0.06));\r
      box-shadow: 0 24px 80px rgba(0,0,0,0.38);\r
      backdrop-filter: blur(10px);\r
    }\r
\r
    .start-icon {\r
      display: inline-flex;\r
      align-items: center;\r
      justify-content: center;\r
      width: 100px;\r
      height: 100px;\r
      border-radius: 20px;\r
      margin-bottom: 1rem;\r
      background: linear-gradient(135deg, #2563eb, #1d4ed8);\r
      box-shadow: 0 18px 46px rgba(37,99,235,0.34);\r
      font-size: 42px;\r
    }\r
\r
    .start-title {\r
      font-size: clamp(24px, 4vw, 40px);\r
      font-family: var(--display-font);\r
      font-weight: 300;\r
      letter-spacing: -0.04em;\r
      line-height: 1.08;\r
      margin-bottom: 0.9rem;\r
    }\r
\r
    .topic-picker {\r
      display: grid;\r
      grid-template-columns: repeat(2, minmax(0, 1fr));\r
      gap: 0.9rem;\r
      max-width: 640px;\r
      margin: 0 auto 1rem;\r
      text-align: left;\r
    }\r
\r
    .topic-field {\r
      display: flex;\r
      flex-direction: column;\r
      gap: 0.45rem;\r
    }\r
\r
    .topic-field label {\r
      color: rgba(255,255,255,0.68);\r
      font-size: 11px;\r
      font-weight: 900;\r
      letter-spacing: 0.12em;\r
    }\r
\r
    .topic-select {\r
      width: 100%;\r
      border: 1px solid rgba(255,255,255,0.20);\r
      border-radius: 12px;\r
      padding: 0.85rem 0.95rem;\r
      background: rgba(255,255,255,0.12);\r
      color: #fff;\r
      font-size: 14px;\r
      font-weight: 800;\r
      outline: none;\r
    }\r
\r
    .topic-select option {\r
      color: #0f172a;\r
      background: #fff;\r
    }\r
\r
    .topic-count {\r
      margin: -0.25rem auto 1rem;\r
      color: rgba(255,255,255,0.72);\r
      font-size: 13px;\r
      font-weight: 800;\r
      letter-spacing: 0.04em;\r
    }\r
\r
    .start-btn {\r
      display: inline-flex;\r
      align-items: center;\r
      justify-content: center;\r
      gap: 0.75rem;\r
      border: none;\r
      border-radius: 999px;\r
      padding: 0.85rem 2.25rem;\r
      background: linear-gradient(135deg, #2684ff, #1d6ff2);\r
      color: #fff;\r
      font-size: 18px;\r
      font-weight: 950;\r
      cursor: pointer;\r
      box-shadow: 0 18px 44px rgba(37,99,235,0.35);\r
      transition: transform 0.12s ease, opacity 0.12s ease;\r
    }\r
    .start-btn:hover { transform: translateY(-2px); }\r
    .start-btn:active { transform: scale(0.98); }\r
\r
    .question-card {\r
      background: var(--surface);\r
      border: 1px solid rgba(216,231,245,0.95);\r
      border-radius: 14px;\r
      box-shadow: 0 18px 48px rgba(0,0,0,0.22);\r
      padding: 1.3rem 1.65rem 1.25rem;\r
      margin-bottom: 0.6rem;\r
    }\r
\r
    .question-label {\r
      font-size: 11px;\r
      font-weight: 900;\r
      letter-spacing: 0.12em;\r
      color: var(--accent);\r
      text-align: center;\r
      margin-top: 0;\r
      margin-bottom: 0.35rem;\r
    }\r
\r
    .question-topic {\r
      margin: 0 0 0.65rem;\r
      color: #64748b;\r
      font-size: 11px;\r
      font-weight: 800;\r
      letter-spacing: 0.04em;\r
      text-align: center;\r
      line-height: 1.45;\r
    }\r
\r
    .question-text {\r
      font-size: clamp(18px, 2.4vw, 22px);\r
      font-weight: 950;\r
      line-height: 1.35;\r
      color: var(--text);\r
      margin-bottom: 1rem;\r
    }\r
\r
    /* ── Multiple-choice options ── */\r
    .mc-options { display: flex; flex-direction: column; gap: 9px; }\r
\r
    .mc-btn {\r
      display: flex;\r
      align-items: center;\r
      gap: 12px;\r
      background: var(--option-bg);\r
      border: 2px solid var(--border);\r
      border-radius: 12px;\r
      padding: 0.68rem 0.95rem;\r
      font-size: 17px;\r
      font-weight: 650;\r
      color: var(--text);\r
      cursor: pointer;\r
      text-align: left;\r
      width: 100%;\r
      transition: background 0.13s, border-color 0.13s, transform 0.08s;\r
    }\r
    .mc-btn:hover:not(:disabled) {\r
      background: var(--option-hover);\r
      border-color: var(--accent);\r
      transform: translateX(3px);\r
    }\r
    .mc-btn:active:not(:disabled) { transform: scale(0.99); }\r
    .mc-btn:disabled { cursor: default; }\r
\r
    .mc-letter {\r
      display: inline-flex;\r
      align-items: center;\r
      justify-content: center;\r
      width: 34px; height: 34px;\r
      border-radius: 50%;\r
      background: #d7d1ff;\r
      color: #0f4c81;\r
      font-size: 13px;\r
      font-weight: 800;\r
      flex-shrink: 0;\r
      transition: background 0.13s, color 0.13s;\r
    }\r
\r
    .mc-btn.correct { background: #ecfdf3; border-color: var(--success); color: var(--success); }\r
    .mc-btn.correct .mc-letter { background: var(--success); color: #fff; }\r
    .mc-btn.wrong   { background: var(--danger-bg);  border-color: var(--danger);  color: var(--danger); opacity: 0.65; }\r
    .mc-btn.wrong .mc-letter   { background: var(--danger); color: #fff; }\r
\r
    .confetti-piece {\r
      position: fixed;\r
      left: var(--x);\r
      top: var(--y);\r
      z-index: 120;\r
      width: 8px;\r
      height: 13px;\r
      border-radius: 2px;\r
      background: var(--c);\r
      pointer-events: none;\r
      animation: confettiPop 1200ms ease-out forwards;\r
    }\r
\r
    @keyframes confettiPop {\r
      0% { transform: translate3d(0,0,0) rotate(0deg); opacity: 1; }\r
      100% { transform: translate3d(var(--dx), var(--dy), 0) rotate(220deg); opacity: 0; }\r
    }\r
\r
    /* ── Yes / No options ── */\r
    .yn-options {\r
      display: grid;\r
      grid-template-columns: 1fr 1fr;\r
      gap: 10px;\r
    }\r
    .yn-btn {\r
      display: flex;\r
      flex-direction: column;\r
      align-items: center;\r
      justify-content: center;\r
      gap: 6px;\r
      padding: 0.9rem 0.75rem;\r
      border-radius: 12px;\r
      border: 2px solid var(--border);\r
      background: var(--option-bg);\r
      font-size: 16px;\r
      font-weight: 800;\r
      color: var(--text);\r
      cursor: pointer;\r
      transition: all 0.13s;\r
    }\r
    .yn-btn .yn-icon { font-size: 26px; line-height: 1; }\r
    .yn-btn:hover:not(:disabled) { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(2,16,43,0.22); }\r
    .yn-btn:active:not(:disabled) { transform: scale(0.97); }\r
    .yn-btn:disabled { cursor: default; opacity: 0.8; }\r
\r
    .yn-btn.yes-btn:hover:not(:disabled) { background: var(--success-bg); border-color: var(--success); color: var(--success); }\r
    .yn-btn.no-btn:hover:not(:disabled)  { background: var(--danger-bg);  border-color: var(--danger);  color: var(--danger); }\r
    .yn-btn.correct { background: var(--success-bg); border-color: var(--success); color: var(--success); }\r
    .yn-btn.wrong   { background: var(--danger-bg);  border-color: var(--danger);  color: var(--danger); opacity: 0.6; }\r
\r
    /* ── Shake ── */\r
    @keyframes shake {\r
      0%,100% { transform: translateX(0); }\r
      20% { transform: translateX(-7px); }\r
      40% { transform: translateX(7px); }\r
      60% { transform: translateX(-4px); }\r
      80% { transform: translateX(4px); }\r
    }\r
    .shake { animation: shake 0.35s ease; }\r
\r
    /* ── Hint ── */\r
    .hint-text {\r
      display: none;\r
      margin-top: 0.7rem;\r
      padding: 0.5rem 0.8rem;\r
      border-radius: 9px;\r
      font-size: 13px;\r
      font-weight: 600;\r
      color: var(--danger);\r
      background: var(--danger-bg);\r
      border: 1px solid var(--danger-bd);\r
      text-align: center;\r
    }\r
    .hint-text.show { display: block; }\r
\r
    /* ── Explanation ── */\r
    .explanation {\r
      display: none;\r
      margin-top: 0.9rem;\r
      padding: 0.8rem 1rem;\r
      border-radius: 10px;\r
      font-size: 14px;\r
      line-height: 1.45;\r
      background: #ecfdf3;\r
      border: 1px solid #6ee7a0;\r
      color: #166534;\r
    }\r
    .explanation.show { display: block; }\r
    .expl-title {\r
      display: flex;\r
      align-items: center;\r
      gap: 6px;\r
      font-size: 11px;\r
      font-weight: 800;\r
      letter-spacing: 0.09em;\r
      color: var(--success);\r
      margin-bottom: 4px;\r
    }\r
\r
    /* ── Next button ── */\r
    .next-wrap { display: flex; justify-content: center; margin-top: 0.2rem; }\r
    .next-btn {\r
      display: none;\r
      background: linear-gradient(135deg, var(--purple-mid), var(--purple-light));\r
      color: #fff;\r
      border: none;\r
      border-radius: 10px;\r
      padding: 0.55rem 1.25rem;\r
      font-size: 13px;\r
      font-weight: 700;\r
      cursor: pointer;\r
      box-shadow: 0 4px 14px rgba(2,16,43,0.32);\r
      transition: opacity 0.15s, transform 0.1s;\r
    }\r
    .next-btn:hover { opacity: 0.88; }\r
    .next-btn:active { transform: scale(0.97); }\r
    .next-btn.show { display: inline-block; }\r
\r
    /* ═══════════════════════════════\r
       RESULT SCREEN\r
    ═══════════════════════════════ */\r
    .result-card {\r
      background: var(--surface);\r
      border-radius: var(--radius);\r
      box-shadow: var(--shadow);\r
      padding: 2.5rem 2rem;\r
      text-align: center;\r
    }\r
    .result-emoji { font-size: 56px; margin-bottom: 0.75rem; }\r
    .result-score-lbl {\r
      font-size: 12px; font-weight: 700; letter-spacing: 0.09em;\r
      color: var(--text-muted); margin-bottom: 4px;\r
    }\r
    .result-score {\r
      font-size: 52px; font-weight: 900; letter-spacing: -0.04em;\r
      color: var(--text); margin-bottom: 0.5rem;\r
      background: linear-gradient(135deg, var(--purple-dark), var(--purple-light));\r
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;\r
    }\r
    .result-msg { font-size: 15px; color: var(--text-muted); line-height: 1.6; max-width: 360px; margin: 0 auto 1.75rem; }\r
    .stats-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; margin-bottom: 1.75rem; }\r
    .stat-box { background: var(--option-bg); border-radius: 10px; padding: 0.9rem 0.5rem; border: 1px solid var(--border); }\r
    .stat-val { font-size: 26px; font-weight: 800; color: var(--text); }\r
    .stat-val.green { color: var(--success); }\r
    .stat-val.red   { color: var(--danger); }\r
    .stat-lbl { font-size: 11px; font-weight: 600; letter-spacing: 0.07em; color: var(--text-muted); margin-top: 3px; }\r
\r
    .restart-btn {\r
      background: linear-gradient(135deg, var(--purple-mid), var(--purple-light));\r
      color: #fff; border: none; border-radius: 10px;\r
      padding: 0.8rem 2.2rem; font-size: 15px; font-weight: 700;\r
      cursor: pointer; box-shadow: 0 4px 14px rgba(2,16,43,0.32);\r
      transition: opacity 0.15s;\r
    }\r
    .restart-btn:hover { opacity: 0.88; }\r
\r
    /* ── Oops Popup Overlay ── */\r
    .oops-overlay,\r
    .success-overlay {\r
      display: none;\r
      position: fixed;\r
      inset: 0;\r
      background: rgba(2,16,43,0.74);\r
      backdrop-filter: blur(5px);\r
      z-index: 100;\r
      align-items: center;\r
      justify-content: center;\r
      padding: 1rem;\r
    }\r
    .oops-overlay.show,\r
    .success-overlay.show { display: flex; }\r
\r
    @keyframes popIn {\r
      0%   { transform: scale(0.7); opacity: 0; }\r
      70%  { transform: scale(1.06); opacity: 1; }\r
      100% { transform: scale(1); opacity: 1; }\r
    }\r
\r
    .oops-box,\r
    .success-box {\r
      background: #fff;\r
      border-radius: 20px;\r
      padding: 2.5rem 2rem 2rem;\r
      text-align: center;\r
      max-width: 320px;\r
      width: 100%;\r
      box-shadow: 0 20px 60px rgba(2,16,43,0.38);\r
      animation: popIn 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards;\r
    }\r
\r
    .success-box {\r
      background: transparent;\r
      box-shadow: none;\r
      color: #fff;\r
    }\r
\r
    .oops-emoji,\r
    .success-emoji {\r
      font-size: 60px;\r
      line-height: 1;\r
      margin-bottom: 0.75rem;\r
      display: block;\r
    }\r
\r
    .success-emoji {\r
      font-size: 88px;\r
      filter: drop-shadow(0 16px 28px rgba(0,0,0,0.28));\r
    }\r
\r
    .oops-title,\r
    .success-title {\r
      font-size: 26px;\r
      font-weight: 900;\r
      letter-spacing: -0.02em;\r
      margin-bottom: 0.4rem;\r
    }\r
    .oops-title { color: var(--danger); }\r
    .success-title {\r
      display: inline-flex;\r
      align-items: center;\r
      justify-content: center;\r
      min-width: 146px;\r
      border-radius: 999px;\r
      padding: 0.85rem 1.5rem;\r
      background: #16a34a;\r
      color: #fff;\r
      box-shadow: 0 14px 34px rgba(22,163,74,0.32);\r
    }\r
\r
    .oops-sub,\r
    .success-sub {\r
      font-size: 14px;\r
      color: var(--text-muted);\r
      line-height: 1.55;\r
      margin-bottom: 1.5rem;\r
    }\r
\r
    .success-sub {\r
      margin-top: 1rem;\r
      color: rgba(255,255,255,0.72);\r
      font-weight: 800;\r
    }\r
\r
    .oops-try-btn {\r
      background: linear-gradient(135deg, #dc2626, #f97316);\r
      color: #fff;\r
      border: none;\r
      border-radius: 12px;\r
      padding: 0.85rem 2rem;\r
      font-size: 15px;\r
      font-weight: 800;\r
      cursor: pointer;\r
      width: 100%;\r
      box-shadow: 0 4px 14px rgba(220,38,38,0.35);\r
      transition: opacity 0.15s, transform 0.1s;\r
      letter-spacing: 0.01em;\r
    }\r
    .oops-try-btn:hover  { opacity: 0.9; }\r
    .oops-try-btn:active { transform: scale(0.97); }\r
\r
    .hint-text { display: none !important; }\r
\r
    @media (max-width: 420px) {\r
      .question-text { font-size: 16px; }\r
      .question-card { padding: 1.25rem; }\r
      .topic-picker { grid-template-columns: 1fr; }\r
      .yn-btn { font-size: 16px; padding: 1.1rem 0.5rem; }\r
      .yn-btn .yn-icon { font-size: 28px; }\r
      .oops-box, .success-box { padding: 2rem 1.25rem 1.5rem; }\r
      .oops-emoji, .success-emoji { font-size: 48px; }\r
      .oops-title, .success-title { font-size: 20px; }\r
    }\r
    @media (prefers-reduced-motion: reduce) {\r
      *, *::before, *::after { transition: none !important; animation: none !important; }\r
    }\r
  </style>\r
</head>\r
<body>\r
\r
<div class="sap-bg" aria-hidden="true">\r
  <span class="sap-chip" style="--x:7%;--dur:22s;--delay:-2s;">SAP</span>\r
  <span class="sap-chip" style="--x:18%;--dur:28s;--delay:-12s;">FICO</span>\r
  <span class="sap-chip" style="--x:31%;--dur:24s;--delay:-6s;">GL</span>\r
  <span class="sap-chip" style="--x:45%;--dur:30s;--delay:-18s;">FS00</span>\r
  <span class="sap-chip" style="--x:58%;--dur:25s;--delay:-9s;">OB52</span>\r
  <span class="sap-chip" style="--x:72%;--dur:32s;--delay:-16s;">ACDOCA</span>\r
  <span class="sap-chip" style="--x:84%;--dur:26s;--delay:-4s;">LEDGER</span>\r
  <span class="sap-chip" style="--x:12%;--dur:34s;--delay:-24s;">FI</span>\r
  <span class="sap-chip" style="--x:65%;--dur:29s;--delay:-22s;">CO</span>\r
  <span class="sap-chip" style="--x:91%;--dur:23s;--delay:-11s;">K4</span>\r
</div>\r
\r
<!-- Oops Popup Overlay -->\r
<div class="oops-overlay" id="oops-overlay">\r
  <div class="oops-box">\r
    <span class="oops-emoji">😬</span>\r
    <div class="oops-title">Oops!</div>\r
    <div class="oops-sub">That's not the right answer.<br>Give it another try!</div>\r
    <button class="oops-try-btn" onclick="closeOops()">Try Again →</button>\r
  </div>\r
</div>\r
\r
<!-- Correct Answer Popup Overlay -->\r
<div class="success-overlay" id="success-overlay">\r
  <div class="success-box">\r
    <div class="success-title">Correct!</div>\r
    <div class="success-sub">Great job!</div>\r
  </div>\r
</div>\r
\r
<!-- Hero header (always visible, updates dynamically) -->\r
<div class="quiz-hero" id="quiz-hero">\r
  <img class="hero-logo" src="next-gen-logo.png" alt="Next-Gen ERP Solutions">\r
  <h1 id="hero-title">SAP FICO <span class="gold">Challenge</span></h1>\r
  <div class="hero-sub" id="hero-sub"></div>\r
  <div class="hero-progress-track">\r
    <div class="hero-progress-fill" id="hero-fill" style="width:0%"></div>\r
  </div>\r
  <div class="hero-progress-label" id="hero-label">Question 1 of 330</div>\r
  <div class="hero-stats" aria-label="Quiz stats">\r
    <div class="hero-stat">\r
      <span class="hero-stat-value" id="streak-value">0</span>\r
      <span class="hero-stat-label">Streak</span>\r
    </div>\r
    <div class="hero-stat">\r
      <span class="hero-stat-value" id="best-streak-value">0</span>\r
      <span class="hero-stat-label">Best</span>\r
    </div>\r
  </div>\r
</div>\r
\r
<div class="quiz-body">\r
  <div id="quiz-root"></div>\r
</div>\r
\r
<script>\r
// type "mc" = multiple choice (opts[], ans = index)\r
// type "yn" = yes/no (ans = true/false)\r
const QUESTIONS = [\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "SAP FICO Enterprise Structure",\r
    "q": "Which organizational unit represents an independent legal entity in SAP?",\r
    "fact": "A Company Code is the smallest organizational unit for which a complete set of accounts can be maintained.",\r
    "opts": [\r
      "Company Code",\r
      "Company",\r
      "Plant",\r
      "Profit Center"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "SAP FICO Enterprise Structure",\r
    "q": "Which transaction code is used to create a Company Code?",\r
    "fact": "OX02",\r
    "opts": [\r
      "OX02",\r
      "OX15",\r
      "OX18",\r
      "SPRO"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "yn",\r
    "section": "General Ledger",\r
    "subclass": "SAP FICO Enterprise Structure",\r
    "q": "Can multiple Company Codes be assigned to one Company?",\r
    "fact": "Multiple Company Codes can belong to the same Company for consolidated reporting.",\r
    "ans": true\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "SAP FICO Enterprise Structure",\r
    "q": "Which organizational unit is used to monitor customer credit limits?",\r
    "fact": "Credit Control Area",\r
    "opts": [\r
      "Company Code",\r
      "Credit Control Area",\r
      "Profit Center",\r
      "Plant"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "SAP FICO Enterprise Structure",\r
    "q": "One Credit Control Area can be assigned to",\r
    "fact": "Multiple Company Codes",\r
    "opts": [\r
      "Multiple Company Codes",\r
      "One Company Code Only",\r
      "One Plant Only",\r
      "One Purchasing Organization"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "SAP FICO Enterprise Structure",\r
    "q": "What is the smallest organizational unit for which a complete set of accounts can be maintained",\r
    "fact": "Company Code",\r
    "opts": [\r
      "Company",\r
      "Company Code",\r
      "Plant",\r
      "Business Area"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Financial Accounting Global Settings (New)",\r
    "q": "What is the standard fiscal year variant for calendar year in SAP?",\r
    "fact": "K4 follows January to December with 12 normal periods and 4 special periods",\r
    "opts": [\r
      "V3",\r
      "K4",\r
      "V6",\r
      "S4"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Financial Accounting Global Settings (New)",\r
    "q": "Which transaction code is used to maintain Company Code Global Parameters?",\r
    "fact": "OBY6",\r
    "opts": [\r
      "OBY6",\r
      "OB52",\r
      "OBA7",\r
      "OB13"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Financial Accounting Global Settings (New)",\r
    "q": "In OBY6, which of the following can be maintained?",\r
    "fact": "All of the Above",\r
    "opts": [\r
      "Local Currency",\r
      "Fiscal Year Variant",\r
      "Chart of Accounts",\r
      "All of the Above"\r
    ],\r
    "ans": 3\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Financial Accounting Global Settings (New)",\r
    "q": "What is the purpose of a Fiscal Year Variant?",\r
    "fact": "Define accounting periods in a fiscal year",\r
    "opts": [\r
      "Define tax procedure",\r
      "Define accounting periods in a fiscal year",\r
      "Define exchange rates",\r
      "Define document types"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Financial Accounting Global Settings (New)",\r
    "q": "How many special periods can SAP support in a Fiscal Year?",\r
    "fact": "4",\r
    "opts": [\r
      "2",\r
      "4",\r
      "6",\r
      "12"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Financial Accounting Global Settings (New)",\r
    "q": "What is the purpose of a Posting Period Variant?",\r
    "fact": "Control open and closed posting periods",\r
    "opts": [\r
      "Control open and closed posting periods",\r
      "Define currencies",\r
      "Define taxes",\r
      "Define company codes"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Financial Accounting Global Settings (New)",\r
    "q": "Which transaction code is used to open and close posting periods?",\r
    "fact": "OB52",\r
    "opts": [\r
      "OBY6",\r
      "OB52",\r
      "OB13",\r
      "OBA7"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Financial Accounting Global Settings (New)",\r
    "q": "What happens if a user posts to a closed period?",\r
    "fact": "System issues an error and blocks posting",\r
    "opts": [\r
      "Posting succeeds",\r
      "System allows posting with warning",\r
      "System issues an error and blocks posting",\r
      "Document is parked automatically"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Financial Accounting Global Settings (New)",\r
    "q": "Which transaction code is used to define Document Number Ranges?",\r
    "fact": "Number ranges are maintained in FBN1 and assigned through document types in OBA7.",\r
    "opts": [\r
      "FBN1",\r
      "OBA7",\r
      "FBN1/OBA7",\r
      "OB52"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Financial Accounting Global Settings (New)",\r
    "q": "What is the purpose of a Document Type?",\r
    "fact": "Control document entry and number ranges",\r
    "opts": [\r
      "Determine account group",\r
      "Control document entry and number ranges",\r
      "Define tax codes",\r
      "Define exchange rates"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Financial Accounting Global Settings (New)",\r
    "q": "What is the standard SAP document type for General Ledger postings?",\r
    "fact": "SA",\r
    "opts": [\r
      "SA",\r
      "KR",\r
      "DZ",\r
      "DR"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Financial Accounting Global Settings (New)",\r
    "q": "What is the purpose of Field Status Variants?",\r
    "fact": "Control field behavior during document entry",\r
    "opts": [\r
      "Control field behavior during document entry",\r
      "Control number ranges",\r
      "Control exchange rates",\r
      "Control tax procedures"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Financial Accounting Global Settings (New)",\r
    "q": "Which field status options are available in SAP?",\r
    "fact": "All of the Above",\r
    "opts": [\r
      "Suppress",\r
      "Optional",\r
      "Required",\r
      "All of the Above"\r
    ],\r
    "ans": 3\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Financial Accounting Global Settings (New)",\r
    "q": "Your client wants to post adjustment entries after year-end closing. Which configuration helps?",\r
    "fact": "Special Periods in Fiscal Year Variant",\r
    "opts": [\r
      "Document Type Mapping",\r
      "Special Periods in Fiscal Year Variant",\r
      "Posting Period Variant",\r
      "Field Status Variant"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "yn",\r
    "section": "General Ledger",\r
    "subclass": "General Ledger Accounting (New)",\r
    "q": "How many types of Chart of Accounts are available in SAP FI?",\r
    "fact": "Yes",\r
    "ans": true\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "General Ledger Accounting (New)",\r
    "q": "What are the three types of Chart of Accounts in SAP?",\r
    "fact": "Operating, Country, Group",\r
    "opts": [\r
      "Operating, Country, Group",\r
      "Vendor, Customer, Asset",\r
      "Balance Sheet, P&L, Statistical",\r
      "Local, Global, Regional"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "General Ledger Accounting (New)",\r
    "q": "Which Chart of Accounts is used for day to day postings in Company Code?",\r
    "fact": "Operating COA",\r
    "opts": [\r
      "Country COA",\r
      "Operating COA",\r
      "Group COA",\r
      "Alternate COA"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "General Ledger Accounting (New)",\r
    "q": "What is the purpose of tolerance groups in SAP FI?",\r
    "fact": "Control posting limits and payment differences",\r
    "opts": [\r
      "Control posting limits and payment differences",\r
      "Control taxes",\r
      "Control exchange rates",\r
      "Control fiscal years"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "General Ledger Accounting (New)",\r
    "q": "What is the primary purpose of General Ledger Accounting?",\r
    "fact": "The General Ledger (G/L) is the central repository for all accounting transactions and forms the basis for financial reporting",\r
    "opts": [\r
      "Manage vendors",\r
      "Manage customers",\r
      "Record all financial transactions and generate financial statements",\r
      "Manage materials"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "General Ledger Accounting (New)",\r
    "q": "What is a Chart of Accounts?",\r
    "fact": "List of all G/L Accounts used by one or more Company Codes",\r
    "opts": [\r
      "List of Vendors",\r
      "List of Customers",\r
      "List of all G/L Accounts used by one or more Company Codes",\r
      "List of Cost Centers"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "General Ledger Accounting (New)",\r
    "q": "At year-end, P&L Accounts are carried forward to:",\r
    "fact": "Retained Earnings Account",\r
    "opts": [\r
      "Vendor Account",\r
      "Customer Account",\r
      "Retained Earnings Account",\r
      "Asset Account"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Controlling",\r
    "q": "Which organizational unit is responsible for cost accounting?",\r
    "fact": "Controlling Area",\r
    "opts": [\r
      "Company Code",\r
      "Controlling Area",\r
      "Plant",\r
      "Sales Organization"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Controlling",\r
    "q": "One Controlling Area can be assigned to:",\r
    "fact": "Multiple Company Codes",\r
    "opts": [\r
      "One Company Code Only",\r
      "Multiple Company Codes",\r
      "One Plant Only",\r
      "One Sales Organization"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Controlling",\r
    "q": "What is the relationship between Company Code and Controlling Area in SAP?",\r
    "fact": "Many Company Codes to One Controlling Area",\r
    "opts": [\r
      "1:1 Only",\r
      "Many Company Codes to One Controlling Area",\r
      "One Plant to One Controlling Area",\r
      "No Assignment Required"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Controlling",\r
    "q": "Which organizational unit is used for internal management reporting?",\r
    "fact": "Profit Center",\r
    "opts": [\r
      "Profit Center",\r
      "Company",\r
      "Plant",\r
      "Storage Location"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Controlling",\r
    "q": "Which transaction code is used to create a Controlling Area?",\r
    "fact": "OKKP",\r
    "opts": [\r
      "OX06",\r
      "OKKP",\r
      "OX18",\r
      "FS00"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Accounting Concepts",\r
    "q": "According to the Golden Rules of Accounting, for a Real Account:",\r
    "fact": "Debit What Comes In, Credit What Goes Out",\r
    "opts": [\r
      "Debit the Receiver, Credit the Giver",\r
      "Debit What Comes In, Credit What Goes Out",\r
      "Debit Expenses, Credit Income",\r
      "Debit Income, Credit Expenses"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Accounting Concepts",\r
    "q": "Which of the following is an Asset?",\r
    "fact": "Cash in Hand",\r
    "opts": [\r
      "Loan from Bank",\r
      "Accounts Payable",\r
      "Cash in Hand",\r
      "Share Capital"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Accounting Concepts",\r
    "q": "Which of the following is a Liability?",\r
    "fact": "Vendor Payable",\r
    "opts": [\r
      "Building",\r
      "Vendor Payable",\r
      "Inventory",\r
      "Cash"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Accounting Concepts",\r
    "q": "What is Double Entry Accounting?",\r
    "fact": "Two or more accounts affected with equal Debit and Credit",\r
    "opts": [\r
      "One account affected",\r
      "Two or more accounts affected with equal Debit and Credit",\r
      "Only Debit Entries",\r
      "Only Credit Entries"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Accounting Concepts",\r
    "q": "Which statement is always true?",\r
    "fact": "Total Debit = Total Credit",\r
    "opts": [\r
      "Total Debit = Total Credit",\r
      "Total Debit > Total Credit",\r
      "Total Credit > Total Debit",\r
      "None"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Accounting Concepts",\r
    "q": "Which account type is Salary Expense?",\r
    "fact": "Expense",\r
    "opts": [\r
      "Asset",\r
      "Liability",\r
      "Income",\r
      "Expense"\r
    ],\r
    "ans": 3\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Accounting Concepts",\r
    "q": "What is a Journal Entry?",\r
    "fact": "First recording of a transaction in books",\r
    "opts": [\r
      "Summary Report",\r
      "First recording of a transaction in books",\r
      "Trial Balance",\r
      "Balance Sheet"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Accounting Concepts",\r
    "q": "Which financial statement shows profitability?",\r
    "fact": "Profit & Loss Statement",\r
    "opts": [\r
      "Balance Sheet",\r
      "Trial Balance",\r
      "Profit & Loss Statement",\r
      "Cash Book"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Accounting Concepts",\r
    "q": "What is the purpose of a Trial Balance?",\r
    "fact": "Verify Debit and Credit balances",\r
    "opts": [\r
      "Verify Debit and Credit balances",\r
      "Calculate Tax",\r
      "Manage Inventory",\r
      "Create Vendors"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Accounting Concepts",\r
    "q": "Which financial statement shows Assets and Liabilities?",\r
    "fact": "Balance Sheet",\r
    "opts": [\r
      "P&L Statement",\r
      "Balance Sheet",\r
      "Journal",\r
      "Ledger"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Accounting Concepts",\r
    "q": "Accounts Receivable represents:",\r
    "fact": "Money owed by Customers",\r
    "opts": [\r
      "Money owed to Vendors",\r
      "Money owed by Customers",\r
      "Cash Balance",\r
      "Tax Liability"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Accounting Concepts",\r
    "q": "Accounts Payable represents:",\r
    "fact": "Money payable to vendors",\r
    "opts": [\r
      "Money receivable from customers",\r
      "Money payable to vendors",\r
      "Cash in Bank",\r
      "Fixed Assets"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Accounting Concepts",\r
    "q": "What is Depreciation?",\r
    "fact": "Allocation of Asset Cost over useful life",\r
    "opts": [\r
      "Increase in Asset Value",\r
      "Allocation of Asset Cost over useful life",\r
      "Tax Calculation",\r
      "Vendor Payment"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Accounting Concepts",\r
    "q": "What is a Provision?",\r
    "fact": "Known future liability estimated today",\r
    "opts": [\r
      "Known future liability estimated today",\r
      "Fixed Asset",\r
      "Cash Balance",\r
      "Revenue Account"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Master data",\r
    "q": "Which transaction code is used to create a G/L Account?",\r
    "fact": "FS00",\r
    "opts": [\r
      "FSP0",\r
      "FS00",\r
      "FK01",\r
      "FD01"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Master data",\r
    "q": "A G/L Account is created at which levels?",\r
    "fact": "Chart of Accounts and Company Code",\r
    "opts": [\r
      "Company Code only",\r
      "Chart of Accounts only",\r
      "Chart of Accounts and Company Code",\r
      "Client only"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Master data",\r
    "q": "What controls the number range of G/L accounts?",\r
    "fact": "Account Group",\r
    "opts": [\r
      "Fiscal Year Variant",\r
      "Account Group",\r
      "Document Type",\r
      "Posting Key"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Master data",\r
    "q": "What is Open Item Management in SAP?",\r
    "fact": "Open Item Management (OIM) tracks outstanding (open) and cleared transactions until they are fully settled.",\r
    "opts": [\r
      "Tracks all cleared and uncleared items separately",\r
      "Controls document number ranges",\r
      "Defines posting periods",\r
      "Creates cost centers"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Master data",\r
    "q": "What is the purpose of a Cost Center?",\r
    "fact": "Track Expenses",\r
    "opts": [\r
      "Track Expenses",\r
      "Track Assets",\r
      "Track Vendors",\r
      "Track Taxes"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Master data",\r
    "q": "What is the purpose of a Profit Center?",\r
    "fact": "Track Revenue and Profitability",\r
    "opts": [\r
      "Track Expenses Only",\r
      "Track Revenue and Profitability",\r
      "Track Vendors",\r
      "Track Fixed Assets"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Master data",\r
    "q": "During document posting, Assignment Field should be mandatory. Which configuration controls this?",\r
    "fact": "Field Status Variant",\r
    "opts": [\r
      "Posting Period Variant",\r
      "Field Status Variant",\r
      "Fiscal Year Variant"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Master data",\r
    "q": "Which transaction code displays G/L account balances?",\r
    "fact": "FS10N or FAGLB03",\r
    "opts": [\r
      "FBL3N",\r
      "FS10N or FAGLB03",\r
      "F-02",\r
      "FB03"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Master data",\r
    "q": "What happens when an invoice is posted to an Open Item Managed account?",\r
    "fact": "It remains open until cleared by a payment",\r
    "opts": [\r
      "It is immediately cleared",\r
      "It remains open until cleared by a payment",\r
      "It is archived automatically",\r
      "It cannot be displayed"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Master data",\r
    "q": "Which indicator in the G/L master enables Open Item Management?",\r
    "fact": "Open Item Management",\r
    "opts": [\r
      "Line Item Display",\r
      "Open Item Management",\r
      "Tax Category",\r
      "Posting Block"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Master data",\r
    "q": "What is the main advantage of Open Item Management?",\r
    "fact": "Easy tracking of outstanding balances",\r
    "opts": [\r
      "Faster printing",\r
      "Easy tracking of outstanding balances",\r
      "Automatic exchange rate updates",\r
      "Automatic tax calculation"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Master data",\r
    "q": "Which transaction is commonly used to clear open items?",\r
    "fact": "F-03",\r
    "opts": [\r
      "F-03",\r
      "F-02",\r
      "FB50",\r
      "FS00"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Master data",\r
    "q": "What is a cleared item?",\r
    "fact": "An item matched and settled against another transaction",\r
    "opts": [\r
      "An item awaiting payment",\r
      "An item matched and settled against another transaction",\r
      "A blocked item",\r
      "A parked document"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Master data",\r
    "q": "What is Line Item Display?",\r
    "fact": "Displays individual document line items for an account",\r
    "opts": [\r
      "Displays individual document line items for an account",\r
      "Displays only account balances",\r
      "Displays vendor details only",\r
      "Displays fiscal year variants"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Master data",\r
    "q": "Which indicator enables line item reporting for a G/L account?",\r
    "fact": "Line Item Display",\r
    "opts": [\r
      "Open Item Management",\r
      "Line Item Display",\r
      "Posting Key",\r
      "Field Status Group"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Master data",\r
    "q": "Which transaction displays G/L line items?",\r
    "fact": "FBL3N or FAGLL03",\r
    "opts": [\r
      "FS10N",\r
      "FBL3N or FAGLL03",\r
      "FB03",\r
      "F-03"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Master data",\r
    "q": "Which account type commonly uses Line Item Display?",\r
    "fact": "All of the Above",\r
    "opts": [\r
      "Expense Accounts",\r
      "Revenue Accounts",\r
      "Balance Sheet Accounts",\r
      "All of the Above"\r
    ],\r
    "ans": 3\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Master data",\r
    "q": "Which table stores G/L line items in S/4HANA?",\r
    "fact": "ACDOCA",\r
    "opts": [\r
      "BSEG",\r
      "BKPF",\r
      "ACDOCA",\r
      "SKA1"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Master data",\r
    "q": "What is the purpose of the \\"Balance in Local Currency\\" indicator in FS00?",\r
    "fact": "When this indicator is activated, SAP stores and manages account balances only in the Company Code currency (Local Currency), regardless of the transaction currency.",\r
    "opts": [\r
      "Displays balances only in document currency",\r
      "Updates account balances in local currency only",\r
      "Blocks foreign currency postings",\r
      "Enables tax calculation"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Master data",\r
    "q": "What is the purpose of the \\"Post Automatically Only\\" indicator?",\r
    "fact": "Restricts manual postings and allows only system-generated postings",\r
    "opts": [\r
      "Allows manual postings only",\r
      "Restricts manual postings and allows only system-generated postings",\r
      "Blocks all postings",\r
      "Allows vendor postings only"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "General Ledger",\r
    "subclass": "Master data",\r
    "q": "What is the purpose of the \\"Relevant to Cash Flow\\" indicator?",\r
    "fact": "Includes account postings in Cash Flow Statement reporting",\r
    "opts": [\r
      "Controls tax calculation",\r
      "Includes account postings in Cash Flow Statement reporting",\r
      "Opens posting periods",\r
      "Controls number ranges"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "S/4 HANA",\r
    "q": "What is the primary database supported by SAP S/4HANA?",\r
    "fact": "SAP S/4HANA runs exclusively on the SAP HANA database.",\r
    "opts": [\r
      "Oracle",\r
      "SQL Server",\r
      "SAP HANA",\r
      "DB2"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "S/4 HANA",\r
    "q": "Which table replaces BKPF and BSEG reporting simplification in S/4HANA?",\r
    "fact": "ACDOCA (Universal Journal) combines FI and CO line-item data.",\r
    "opts": [\r
      "ACDOCA",\r
      "GLT0",\r
      "FAGLFLEXT",\r
      "ANEK"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "S/4 HANA",\r
    "q": "Which transaction is replaced by SAP Fiori apps in S/4HANA?",\r
    "fact": "Traditional SAP GUI transactions still exist, but SAP recommends Fiori apps",\r
    "opts": [\r
      "FB50",\r
      "FB60",\r
      "FBL1N",\r
      "All of the Above"\r
    ],\r
    "ans": 3\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "S/4 HANA",\r
    "q": "Which functionality is mandatory in S/4HANA for inventory valuation?",\r
    "fact": "Material Ledger",\r
    "opts": [\r
      "Profit Center Accounting",\r
      "Material Ledger",\r
      "Special Ledger",\r
      "Costing Sheet"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "S/4 HANA",\r
    "q": "Vendor and Customer Master records are replaced by:",\r
    "fact": "Business Partner (BP) is mandatory in S/4HANA.",\r
    "opts": [\r
      "Business Partner",\r
      "Universal Journal",\r
      "Profit Center",\r
      "Cost Center"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "S/4 HANA",\r
    "q": "Which table stores material documents in S/4HANA?",\r
    "fact": "MATDOC",\r
    "opts": [\r
      "MKPF and MSEG",\r
      "MATDOC",\r
      "MARD",\r
      "MARA"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Asset Accounting",\r
    "q": "Which asset accounting version is available in S/4HANA?",\r
    "fact": "New Asset Accounting",\r
    "opts": [\r
      "Classic Asset Accounting",\r
      "New Asset Accounting",\r
      "Legacy Asset Accounting",\r
      "Special Asset Accounting"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Asset Accounting",\r
    "q": "Which table stores Asset Accounting postings in SAP S/4HANA?",\r
    "fact": "Asset Accounting postings are stored in the Universal Journal (ACDOCA)",\r
    "opts": [\r
      "ANEK",\r
      "ANEP",\r
      "ACDOCA",\r
      "BKPF"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Asset Accounting",\r
    "q": "Which transaction code is used to create an Asset Master Record?",\r
    "fact": "AS01",\r
    "opts": [\r
      "AS01",\r
      "AS11",\r
      "AW01N",\r
      "ABZON"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Asset Accounting",\r
    "q": "What is the purpose of an Asset Class?",\r
    "fact": "Determines Asset Number Range and G/L Accounts",\r
    "opts": [\r
      "Controls Vendor Posting",\r
      "Controls Customer Posting",\r
      "Determines Asset Number Range and G/L Accounts",\r
      "Calculates GST"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Asset Accounting",\r
    "q": "What is Depreciation Area?",\r
    "fact": "Valuation View for Depreciation Calculation",\r
    "opts": [\r
      "Asset Category",\r
      "Valuation View for Depreciation Calculation",\r
      "Cost Center Group",\r
      "Fiscal Year Variant"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Asset Accounting",\r
    "q": "Which depreciation area posts to the General Ledger?",\r
    "fact": "Area 01 (Book Depreciation)",\r
    "opts": [\r
      "Area 01 (Book Depreciation)",\r
      "Area 15",\r
      "Area 20",\r
      "Area 30"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Asset Accounting",\r
    "q": "Which transaction is used to display Asset Explorer?",\r
    "fact": "AW01N",\r
    "opts": [\r
      "AS03",\r
      "AW01N",\r
      "AFAB",\r
      "ABUMN"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Asset Accounting",\r
    "q": "Which transaction is used to run depreciation?",\r
    "fact": "AFAB",\r
    "opts": [\r
      "AFAB",\r
      "F.13",\r
      "F110",\r
      "AJRW"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Asset Accounting",\r
    "q": "In S/4HANA, depreciation posting updates which table?",\r
    "fact": "ACDOCA",\r
    "opts": [\r
      "BSEG",\r
      "ANEP",\r
      "ACDOCA",\r
      "BSIS"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Asset Accounting",\r
    "q": "Which transaction is used for Asset Acquisition from Vendor?",\r
    "fact": "F-90",\r
    "opts": [\r
      "F-90",\r
      "F-92",\r
      "ABUMN",\r
      "ABAON"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Asset Accounting",\r
    "q": "Which transaction is used for Asset Retirement with Revenue?",\r
    "fact": "F-92",\r
    "opts": [\r
      "F-92",\r
      "F-90",\r
      "AS02",\r
      "AFAB"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Asset Accounting",\r
    "q": "What is the benefit of Universal Journal in Asset Accounting?",\r
    "fact": "Real-time Integration between FI and AA",\r
    "opts": [\r
      "Separate FI and AA Reconciliation",\r
      "Real-time Integration between FI and AA",\r
      "Manual Reconciliation Required",\r
      "No Asset Reporting"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Asset Accounting",\r
    "q": "What is Accumulated Depreciation?",\r
    "fact": "Accumulated Depreciation represents the total depreciation recorded on an asset over its useful life",\r
    "opts": [\r
      "Total cost of an asset",\r
      "Total depreciation charged on an asset since acquisition",\r
      "Annual depreciation amount",\r
      "Asset sale value"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Ledgers",\r
    "q": "What is a Ledger in SAP S/4HANA?",\r
    "fact": "A ledger stores accounting transactions and supports different accounting principles.",\r
    "opts": [\r
      "A Vendor Account",\r
      "A Customer Account",\r
      "A Repository of Accounting Postings",\r
      "A Cost Center"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Ledgers",\r
    "q": "Which ledger is the leading ledger delivered by SAP?",\r
    "fact": "0L",\r
    "opts": [\r
      "0L",\r
      "1L",\r
      "NL",\r
      "SL"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Ledgers",\r
    "q": "How many leading ledgers can exist in a company code?",\r
    "fact": "One",\r
    "opts": [\r
      "Multiple",\r
      "Two",\r
      "One",\r
      "Unlimited"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Ledgers",\r
    "q": "What is the purpose of a Non-Leading Ledger?",\r
    "fact": "Support parallel accounting principles",\r
    "opts": [\r
      "Store vendor data",\r
      "Support parallel accounting principles",\r
      "Manage assets",\r
      "Calculate taxes"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Ledgers",\r
    "q": "Which accounting principle is typically assigned to the Leading Ledger?",\r
    "fact": "IFRS",\r
    "opts": [\r
      "Local GAAP",\r
      "IFRS",\r
      "Tax Accounting Only",\r
      "Management Accounting"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Ledgers",\r
    "q": "What is the main advantage of using multiple ledgers?",\r
    "fact": "Parallel Accounting",\r
    "opts": [\r
      "Faster payments",\r
      "Parallel Accounting",\r
      "Vendor Management",\r
      "Inventory Management"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Ledgers",\r
    "q": "Can a posting be made only to a specific ledger?",\r
    "fact": "Yes, through Ledger Group Posting",\r
    "opts": [\r
      "No",\r
      "Yes, through Ledger Group Posting",\r
      "Only in ECC",\r
      "Only in Asset Accounting"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Ledgers",\r
    "q": "What is a Ledger Group?",\r
    "fact": "Collection of One or More Ledgers",\r
    "opts": [\r
      "Group of Cost Centers",\r
      "Group of Vendors",\r
      "Collection of One or More Ledgers",\r
      "Group of Assets"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Ledgers",\r
    "q": "Which ledger receives all postings by default?",\r
    "fact": "Leading Ledger (0L)",\r
    "opts": [\r
      "Non-Leading Ledger",\r
      "Extension Ledger",\r
      "Leading Ledger (0L)",\r
      "Special Purpose Ledger"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Ledgers",\r
    "q": "What is an Extension Ledger in S/4HANA?",\r
    "fact": "Ledger that stores only delta adjustments and references a base ledger",\r
    "opts": [\r
      "Physical Ledger",\r
      "Ledger that stores only delta adjustments and references a base ledger",\r
      "Vendor Ledger",\r
      "Asset Ledge"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Ledgers",\r
    "q": "Which type of ledger reduces data redundancy?",\r
    "fact": "Extension Ledger",\r
    "opts": [\r
      "Leading Ledger",\r
      "Extension Ledger",\r
      "Asset Ledger",\r
      "Customer Ledger"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Ledgers",\r
    "q": "A company reports under both IFRS and Indian GAAP. Which feature should be used?",\r
    "fact": "Multiple Ledgers",\r
    "opts": [\r
      "Cost Centers",\r
      "Multiple Ledgers",\r
      "Profit Centers",\r
      "Internal Orders"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Ledgers",\r
    "q": "What is Parallel Accounting?",\r
    "fact": "Maintaining financial statements under different accounting standards",\r
    "opts": [\r
      "Multiple vendors in one company code",\r
      "Maintaining financial statements under different accounting standards",\r
      "Multiple currencies only",\r
      "Multiple fiscal years"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Ledgers",\r
    "q": "Which Table stores ledger-specific information in Universal Journal?",\r
    "fact": "ACDOCA",\r
    "opts": [\r
      "ACDOCA",\r
      "MKPF",\r
      "MSEG",\r
      "ANEP"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Ledgers",\r
    "q": "Can different fiscal year variants be assigned to non-leading ledgers?",\r
    "fact": "Yes",\r
    "opts": [\r
      "No",\r
      "Yes",\r
      "Only in ECC",\r
      "Only for Assets"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Ledgers",\r
    "q": "Which ledger type is commonly used for management adjustments and simulations?",\r
    "fact": "Extension Ledger",\r
    "opts": [\r
      "Leading Ledger",\r
      "Extension Ledger",\r
      "Asset Ledger",\r
      "Tax Ledger"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "Ledgers",\r
    "q": "What is the key benefit of Ledgers in SAP S/4HANA?",\r
    "fact": "Parallel Accounting and Flexible Financial Reporting",\r
    "opts": [\r
      "Faster Vendor Payments",\r
      "Better Inventory Management",\r
      "Parallel Accounting and Flexible Financial Reporting",\r
      "Material Planning"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Landscape Quiz (with Answers)",\r
    "q": "What is meant by SAP Landscape?",\r
    "fact": "SAP Landscape refers to the arrangement of SAP systems such as Development, Quality, and Production.",\r
    "opts": [\r
      "A group of SAP modules",\r
      "The arrangement of SAP systems in an environment",\r
      "SAP GUI screen design",\r
      "SAP authorization concept"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Landscape Quiz (with Answers)",\r
    "q": "Which system is used for configuration and development activities?",\r
    "fact": "Development System",\r
    "opts": [\r
      "Production System",\r
      "Quality System",\r
      "Development System",\r
      "Sandbox System"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Landscape Quiz (with Answers)",\r
    "q": "What is the primary purpose of the Quality (QAS) system?",\r
    "fact": "Testing configurations and developments",\r
    "opts": [\r
      "End-user transactions",\r
      "Testing configurations and developments",\r
      "Master data creation",\r
      "Financial closing"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Landscape Quiz (with Answers)",\r
    "q": "Which system contains live business data?",\r
    "fact": "Production",\r
    "opts": [\r
      "Development",\r
      "Sandbox",\r
      "Quality",\r
      "Production"\r
    ],\r
    "ans": 3\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Landscape Quiz (with Answers)",\r
    "q": "What is the typical 3-system SAP landscape?",\r
    "fact": "DEV → QAS → PRD",\r
    "opts": [\r
      "DEV → QAS → PRD",\r
      "PRD → DEV → QAS",\r
      "DEV → PRD → QAS",\r
      "QAS → DEV → PRD"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Landscape Quiz (with Answers)",\r
    "q": "What does DEV stand for?",\r
    "fact": "Development System",\r
    "opts": [\r
      "Device System",\r
      "Development System",\r
      "Deployment System",\r
      "Delivery System"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Landscape Quiz (with Answers)",\r
    "q": "What does QAS stand for?",\r
    "fact": "Quality Assurance System",\r
    "opts": [\r
      "Quick Access System",\r
      "Quality Assurance System",\r
      "Query Analysis System",\r
      "Qualification System"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Landscape Quiz (with Answers)",\r
    "q": "What does PRD stand for?",\r
    "fact": "Production System",\r
    "opts": [\r
      "Product System",\r
      "Production System",\r
      "Project System",\r
      "Program Development"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Landscape Quiz (with Answers)",\r
    "q": "What is a Sandbox system?",\r
    "fact": "Training and experimentation system",\r
    "opts": [\r
      "Live Production System",\r
      "Training and experimentation system",\r
      "Backup System",\r
      "Reporting System"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Landscape Quiz (with Answers)",\r
    "q": "Why are transport Request used in SAP Landscape?",\r
    "fact": "To move configurations and developments between systems",\r
    "opts": [\r
      "To move configurations and developments between systems",\r
      "To create users",\r
      "To post documents",\r
      "To run reports"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Landscape Quiz (with Answers)",\r
    "q": "Can direct configuration changes be made in Production?",\r
    "fact": "Never (best practice)",\r
    "opts": [\r
      "Always",\r
      "Never (best practice)",\r
      "Only for FI module",\r
      "Only by end users"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Landscape Quiz (with Answers)",\r
    "q": "Which transaction code is used to manage Transport Requests?",\r
    "fact": "SE09 / SE10",\r
    "opts": [\r
      "SE11",\r
      "SE38",\r
      "SE09 / SE10",\r
      "SM35"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Landscape Quiz (with Answers)",\r
    "q": "What are the two main types of Transport Requests?",\r
    "fact": "Workbench and Customizing",\r
    "opts": [\r
      "Local and Global",\r
      "Workbench and Customizing",\r
      "Master and Transactional",\r
      "Internal and External"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Landscape Quiz (with Answers)",\r
    "q": "Which Transport Request is used for configuration changes?",\r
    "fact": "Customizing Request",\r
    "opts": [\r
      "Workbench Request",\r
      "Customizing Request",\r
      "Repair Request",\r
      "Local Request"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Landscape Quiz (with Answers)",\r
    "q": "Which Transport Request is used for ABAP developments and Repository objects?",\r
    "fact": "Workbench Request",\r
    "opts": [\r
      "Customizing Request",\r
      "Local Request",\r
      "Workbench Request",\r
      "Repair Request"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Landscape Quiz (with Answers)",\r
    "q": "What happens when a Transport Request is released?",\r
    "fact": "It is ready to move to another system",\r
    "opts": [\r
      "It gets deleted",\r
      "It becomes editable",\r
      "It is ready to move to another system",\r
      "It moves automatically to production"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Landscape Quiz (with Answers)",\r
    "q": "Which table stores Accounting Document Header information?",\r
    "fact": "BKPF contains document header data such as Document Number, Company Code, Fiscal Year, and Posting Date.",\r
    "opts": [\r
      "BSEG",\r
      "BKPF",\r
      "BSIS",\r
      "SKA1"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Landscape Quiz (with Answers)",\r
    "q": "Which table stores Accounting Document Line Items?",\r
    "fact": "SEG",\r
    "opts": [\r
      "BKPF",\r
      "BSEG",\r
      "BSAS",\r
      "ANLA"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP ASAP Methodology Phases – Quiz with Answers",\r
    "q": "How many phases are there in ASAP Methodology?",\r
    "fact": "– 5 Phases",\r
    "opts": [\r
      "4",\r
      "5",\r
      "6",\r
      "7"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP ASAP Methodology Phases – Quiz with Answers",\r
    "q": "Which is the first phase of ASAP Methodology?",\r
    "fact": "Project Preparation",\r
    "opts": [\r
      "Business Blueprint",\r
      "Realization",\r
      "Project Preparation",\r
      "Final Preparation"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP ASAP Methodology Phases – Quiz with Answers",\r
    "q": "What is the main objective of the Project Preparation phase?",\r
    "fact": "Define project scope, team, and project plan",\r
    "opts": [\r
      "End-user training",\r
      "Define project scope, team, and project plan",\r
      "Production support",\r
      "Data migration"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP ASAP Methodology Phases – Quiz with Answers",\r
    "q": "During which phase is the Project Charter prepared?",\r
    "fact": "Project Preparation",\r
    "opts": [\r
      "Project Preparation",\r
      "Business Blueprint",\r
      "Realization",\r
      "Go-Live"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP ASAP Methodology Phases – Quiz with Answers",\r
    "q": "Which phase focuses on gathering business requirements?",\r
    "fact": "Business Blueprint",\r
    "opts": [\r
      "Realization",\r
      "Business Blueprint",\r
      "Final Preparation",\r
      "Go-Live"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP ASAP Methodology Phases – Quiz with Answers",\r
    "q": "What is the key deliverable of the Business Blueprint phase?",\r
    "fact": "Business Blueprint Document (BBP)",\r
    "opts": [\r
      "Functional Specification",\r
      "Business Blueprint Document (BBP)",\r
      "Cutover Plan",\r
      "End User Manual"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP ASAP Methodology Phases – Quiz with Answers",\r
    "q": "In which phase are AS-IS and TO-BE processes documented?",\r
    "fact": "Business Blueprint",\r
    "opts": [\r
      "Project Preparation",\r
      "Business Blueprint",\r
      "Realization",\r
      "Final Preparation"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP ASAP Methodology Phases – Quiz with Answers",\r
    "q": "Which ASAP phase involves system configuration?",\r
    "fact": "Realization",\r
    "opts": [\r
      "Project Preparation",\r
      "Business Blueprint",\r
      "Realization",\r
      "Go-Live Support"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP ASAP Methodology Phases – Quiz with Answers",\r
    "q": "During Realization, consultants perform:",\r
    "fact": "System Configuration and Unit Testing",\r
    "opts": [\r
      "User Training",\r
      "System Configuration and Unit Testing",\r
      "Production Support",\r
      "Data Archiving"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP ASAP Methodology Phases – Quiz with Answers",\r
    "q": "What are the two stages of Realization?",\r
    "fact": "Basic Configuration and Final Configuration",\r
    "opts": [\r
      "Basic Configuration and Final Configuration",\r
      "Unit Testing and UAT",\r
      "Development and Production",\r
      "Design and Support"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP ASAP Methodology Phases – Quiz with Answers",\r
    "q": "Which phase includes User Acceptance Testing (UAT)?",\r
    "fact": "Final Preparation",\r
    "opts": [\r
      "Business Blueprint",\r
      "Realization",\r
      "Final Preparation",\r
      "Go-Live"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP ASAP Methodology Phases – Quiz with Answers",\r
    "q": "End-user training is conducted during which phase?",\r
    "fact": "Final Preparation",\r
    "opts": [\r
      "Project Preparation",\r
      "Realization",\r
      "Final Preparation",\r
      "Go-Live"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP ASAP Methodology Phases – Quiz with Answers",\r
    "q": "Which ASAP phase includes cutover activities?",\r
    "fact": "Final Preparation",\r
    "opts": [\r
      "Business Blueprint",\r
      "Realization",\r
      "Final Preparation",\r
      "Support"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP ASAP Methodology Phases – Quiz with Answers",\r
    "q": "What is the purpose of Go-Live & Support phase?",\r
    "fact": "Production Startup and Hypercare Support",\r
    "opts": [\r
      "Requirement Gathering",\r
      "Configuration",\r
      "Production Startup and Hypercare Support",\r
      "Blueprint Preparation"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP ASAP Methodology Phases – Quiz with Answers",\r
    "q": "Which phase marks the start of live business transactions?",\r
    "fact": "Go-Live & Support",\r
    "opts": [\r
      "Realization",\r
      "Final Preparation",\r
      "Go-Live & Support",\r
      "Business Blueprint"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Activate Methodology Quiz (with Answers)",\r
    "q": "What is SAP Activate?",\r
    "fact": "SAP Implementation Methodology for S/4HANA",\r
    "opts": [\r
      "SAP Security Tool",\r
      "SAP Implementation Methodology for S/4HANA",\r
      "SAP Database",\r
      "SAP Reporting Tool"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Activate Methodology Quiz (with Answers)",\r
    "q": "SAP Activate is primarily used for:",\r
    "fact": "SAP S/4HANA Implementations",\r
    "opts": [\r
      "SAP R/3 Implementations",\r
      "SAP ECC Implementations Only",\r
      "SAP S/4HANA Implementations",\r
      "SAP Basis Administration"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Activate Methodology Quiz (with Answers)",\r
    "q": "Which methodology replaced ASAP for SAP S/4HANA projects?",\r
    "fact": "SAP Activate",\r
    "opts": [\r
      "Agile",\r
      "Waterfall",\r
      "SAP Activate",\r
      "Scrum"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Activate Methodology Quiz (with Answers)",\r
    "q": "How many phases are there in SAP Activate?",\r
    "fact": "6",\r
    "opts": [\r
      "4",\r
      "5",\r
      "6",\r
      "7"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Activate Methodology Quiz (with Answers)",\r
    "q": "Which is the first phase of SAP Activate?",\r
    "fact": "Discover",\r
    "opts": [\r
      "Explore",\r
      "Prepare",\r
      "Discover",\r
      "Realize"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Activate Methodology Quiz (with Answers)",\r
    "q": "What is the purpose of the Discover phase?",\r
    "fact": "Understand solution capabilities and business value",\r
    "opts": [\r
      "Configure SAP",\r
      "Understand solution capabilities and business value",\r
      "Data Migration",\r
      "User Training"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Activate Methodology Quiz (with Answers)",\r
    "q": "Which phase involves project planning and team setup?",\r
    "fact": "Prepare",\r
    "opts": [\r
      "Explore",\r
      "Discover",\r
      "Prepare",\r
      "Deploy"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Activate Methodology Quiz (with Answers)",\r
    "q": "During which phase are Fit-to-Standard workshops conducted?",\r
    "fact": "Explore",\r
    "opts": [\r
      "Prepare",\r
      "Explore",\r
      "Realize",\r
      "Run"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Activate Methodology Quiz (with Answers)",\r
    "q": "What is the primary objective of the Explore phase?",\r
    "fact": "Gap Analysis and Fit-to-Standard Validation",\r
    "opts": [\r
      "Production Support",\r
      "Gap Analysis and Fit-to-Standard Validation",\r
      "Data Archiving",\r
      "Security Testing"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Activate Methodology Quiz (with Answers)",\r
    "q": "Which phase includes system configuration and development?",\r
    "fact": "Realize",\r
    "opts": [\r
      "Explore",\r
      "Prepare",\r
      "Realize",\r
      "Run"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Activate Methodology Quiz (with Answers)",\r
    "q": "User Acceptance Testing (UAT) is mainly performed during:",\r
    "fact": "Realize",\r
    "opts": [\r
      "Prepare",\r
      "Explore",\r
      "Realize",\r
      "Run"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Activate Methodology Quiz (with Answers)",\r
    "q": "Which phase includes cutover and production migration?",\r
    "fact": "Deploy",\r
    "opts": [\r
      "Explore",\r
      "Realize",\r
      "Deploy",\r
      "Run"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Activate Methodology Quiz (with Answers)",\r
    "q": "Go-Live occurs during which phase?",\r
    "fact": "Deploy",\r
    "opts": [\r
      "Explore",\r
      "Deploy",\r
      "Prepare",\r
      "Discover"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Activate Methodology Quiz (with Answers)",\r
    "q": "Which phase provides ongoing support after Go-Live?",\r
    "fact": "Run",\r
    "opts": [\r
      "Realize",\r
      "Deploy",\r
      "Run",\r
      "Explore"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "S/4HANA & Project",\r
    "subclass": "SAP Activate Methodology Quiz (with Answers)",\r
    "q": "SAP Activate is based on which project approach?",\r
    "fact": "Agile Methodology",\r
    "opts": [\r
      "Waterfall Only",\r
      "Agile Methodology",\r
      "Six Sigma",\r
      "Lean Manufacturing"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Controlling",\r
    "q": "What is the primary purpose of SAP Controlling (CO)?",\r
    "fact": "CO helps management analyze costs, revenues, and profitability for internal decision-making.",\r
    "opts": [\r
      "External Reporting",\r
      "Internal Cost Monitoring and Management",\r
      "Tax Calculation",\r
      "Payroll Processing"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Controlling",\r
    "q": "Which component of CO is used to track costs by department?",\r
    "fact": "Cost Centers represent departments or functional areas where costs are incurred.",\r
    "opts": [\r
      "Profit Center Accounting",\r
      "Cost Center Accounting",\r
      "Asset Accounting",\r
      "Treasury Management"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Controlling",\r
    "q": "What is a Cost Center?",\r
    "fact": "Organizational unit where costs are collected",\r
    "opts": [\r
      "Revenue-generating unit",\r
      "Organizational unit where costs are collected",\r
      "Vendor Account",\r
      "Material Group"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Controlling",\r
    "q": "Which transaction code is used to create a Cost Center?",\r
    "fact": "KS01 is used to create a Cost Center.",\r
    "opts": [\r
      "KA01",\r
      "KS01",\r
      "KP06",\r
      "KSB1"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Controlling",\r
    "q": "What is a Cost Element?",\r
    "fact": "A G/L Account used for Cost Accounting",\r
    "opts": [\r
      "A Cost Center Group",\r
      "A G/L Account used for Cost Accounting",\r
      "A Profit Center",\r
      "A Company Code"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Controlling",\r
    "q": "In SAP S/4HANA, Cost Elements are created using:",\r
    "fact": "In S/4HANA, G/L Accounts and Cost Elements are unified and created using FS00.",\r
    "opts": [\r
      "KA01",\r
      "FS00",\r
      "XK01",\r
      "KS01"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Controlling",\r
    "q": "Which Cost Element category is used for Primary Costs?",\r
    "fact": "Category 01 represents Primary Cost Elements.",\r
    "opts": [\r
      "01",\r
      "21",\r
      "42",\r
      "43"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Controlling",\r
    "q": "Which Cost Element category is used for Internal Activity Allocation?",\r
    "fact": "43",\r
    "opts": [\r
      "01",\r
      "43",\r
      "31",\r
      "90"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Controlling",\r
    "q": "Which transaction is used to post Activity Prices?",\r
    "fact": "KP26",\r
    "opts": [\r
      "KP26",\r
      "KS01",\r
      "KA01",\r
      "KE51"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Controlling",\r
    "q": "What is a Profit Center?",\r
    "fact": "Unit responsible for generating profits",\r
    "opts": [\r
      "Unit responsible for generating profits",\r
      "Vendor Group",\r
      "Material Group",\r
      "Plant"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Controlling",\r
    "q": "Which T-Code is used to create a Profit Center?",\r
    "fact": "KE51",\r
    "opts": [\r
      "KE51",\r
      "KS01",\r
      "KP26",\r
      "KSB1"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "What is Internal Order used for?",\r
    "fact": "Temporary cost collection and monitoring",\r
    "opts": [\r
      "Long-term cost tracking",\r
      "Temporary cost collection and monitoring",\r
      "Tax Reporting",\r
      "Vendor Reconciliation"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "Which T-Code is used to create an Internal Order?",\r
    "fact": "KO01",\r
    "opts": [\r
      "KO01",\r
      "KS01",\r
      "KP26",\r
      "KA01"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "What is the purpose of Assessment in CO?",\r
    "fact": "Cost Allocation using Secondary Cost Elements",\r
    "opts": [\r
      "Direct Cost Posting",\r
      "Cost Allocation using Secondary Cost Elements",\r
      "Asset Transfer",\r
      "Bank Reconciliation"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "Which transaction is used for Assessment Cycle?",\r
    "fact": "KSU1",\r
    "opts": [\r
      "KSU1",\r
      "KSV1",\r
      "KS01",\r
      "KP06"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "What is Distribution in SAP CO?",\r
    "fact": "Allocation using Primary Cost Elements",\r
    "opts": [\r
      "Allocation using Primary Cost Elements",\r
      "Vendor Distribution",\r
      "Asset Allocation",\r
      "Revenue Posting"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "Which transaction is used for Distribution Cycle?",\r
    "fact": "KSV1",\r
    "opts": [\r
      "KSV1",\r
      "KSU1",\r
      "KP06",\r
      "KS01"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "What is the relationship between FI and CO?",\r
    "fact": "FI postings automatically update CO when relevant cost objects exist",\r
    "opts": [\r
      "They are separate modules with no integration",\r
      "FI postings automatically update CO when relevant cost objects exist",\r
      "CO updates FI only during year-end closing",\r
      "CO is a sub-module of MM"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "Which transaction code displays line items posted to an Internal Order?",\r
    "fact": "KOB1",\r
    "opts": [\r
      "KOB1",\r
      "KSB1",\r
      "KO03",\r
      "FBL3N"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "What is budgeting in Internal Orders?",\r
    "fact": "Setting spending limits for an order",\r
    "opts": [\r
      "Setting spending limits for an order",\r
      "Vendor Budgeting",\r
      "Asset Planning",\r
      "Tax Planning"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "Which transaction code is used to enter the budget for an Internal Order?",\r
    "fact": "KO22",\r
    "opts": [\r
      "KO22",\r
      "KO88",\r
      "KO02",\r
      "KOB1"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "What is settlement in Internal Orders?",\r
    "fact": "Transferring collected costs to a receiver object",\r
    "opts": [\r
      "Closing Vendor Accounts",\r
      "Transferring collected costs to a receiver object",\r
      "Clearing Customer Accounts",\r
      "Posting Depreciation"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "Which transaction code is used for Individual Order Settlement?",\r
    "fact": "KO88",\r
    "opts": [\r
      "KO88",\r
      "KO02",\r
      "KO03",\r
      "KO22"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "Which transaction code is used for Mass Settlement of Internal Orders?",\r
    "fact": "KO8G",\r
    "opts": [\r
      "KO8G",\r
      "KO88",\r
      "KO01",\r
      "KO02"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "Which objects can be settlement receivers?",\r
    "fact": "All of the Above",\r
    "opts": [\r
      "Cost Center",\r
      "Asset",\r
      "Profitability Segment (CO-PA)",\r
      "All of the Above"\r
    ],\r
    "ans": 3\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "Which transaction code is used to maintain settlement rules?",\r
    "fact": "KO02",\r
    "opts": [\r
      "KO02",\r
      "KO88",\r
      "KO22",\r
      "KOB1"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "Can revenues be posted to an Internal Order?",\r
    "fact": "Yes, if configured accordingly",\r
    "opts": [\r
      "No",\r
      "Yes, if configured accordingly",\r
      "Only in Asset Accounting",\r
      "Only in CO-PA"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "What is the advantage of using Internal Orders?",\r
    "fact": "All of the Above",\r
    "opts": [\r
      "Detailed tracking of specific events, projects, campaigns, or investments",\r
      "Better cost control and reporting",\r
      "Flexible settlement options",\r
      "All of the Above"\r
    ],\r
    "ans": 3\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "What does CAPEX stand for?",\r
    "fact": "CAPEX refers to expenses incurred for acquiring or improving long-term assets such as buildings, machinery, and equipment.",\r
    "opts": [\r
      "Capital Expenditure",\r
      "Cost Allocation Process",\r
      "Capital Expense Process",\r
      "Cost Accounting Expenditure"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "What does OPEX stand for?",\r
    "fact": "OPEX refers to day-to-day business operating expenses such as salaries, rent, electricity, and maintenance.",\r
    "opts": [\r
      "Operational Expenditure",\r
      "Operating Expenditure",\r
      "Order Processing Expenditure",\r
      "Organization Expense"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "Which Internal Order type is generally used for CAPEX?",\r
    "fact": "Investment Order",\r
    "opts": [\r
      "Overhead Order",\r
      "Investment Order",\r
      "Accrual Order",\r
      "Statistical Order"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "Which Internal Order type is generally used for OPEX?",\r
    "fact": "Overhead Order",\r
    "opts": [\r
      "Overhead Order",\r
      "Investment Order",\r
      "Asset Order",\r
      "Production Order"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "Purchase of a new machine worth ₹10 Lakhs is an example of:",\r
    "fact": "CAPEX",\r
    "opts": [\r
      "OPEX",\r
      "CAPEX",\r
      "Revenue Expense",\r
      "Accrual Expense"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "Monthly office rent is an example of:",\r
    "fact": "OPEX",\r
    "opts": [\r
      "CAPEX",\r
      "Asset Acquisition",\r
      "OPEX",\r
      "Investment Cost"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Controlling",\r
    "subclass": "Internal Orders",\r
    "q": "What is the role of an Allocation Structure in settlement?",\r
    "fact": "Maps source cost elements to settlement cost elements",\r
    "opts": [\r
      "Defines number ranges",\r
      "Maps source cost elements to settlement cost elements",\r
      "Creates Internal Orders",\r
      "Maintains budgets"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "What is the main purpose of Accounts Receivable (AR) in SAP FI?",\r
    "fact": "AR is used to record and monitor all transactions related to customers, such as invoices, incoming payments, and credit memos.",\r
    "opts": [\r
      "Manage company assets",\r
      "Manage vendor payments",\r
      "Manage customer transactions and receivables",\r
      "Manage cost centers"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "Which account type is used for Customer Accounts?",\r
    "fact": "Account Type \\"D\\" represents Customer Accounts in SAP FI.",\r
    "opts": [\r
      "A",\r
      "D",\r
      "K",\r
      "M"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "What is the reconciliation account in customer master?",\r
    "fact": "Customer balances automatically update the reconciliation account in the General Ledger.",\r
    "opts": [\r
      "Temporary account",\r
      "Expense account",\r
      "G/L account linked to subledger",\r
      "Tax account"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "Which transaction is used to post a customer invoice?",\r
    "fact": "F-22 and FB70 can be used for customer invoice posting.",\r
    "opts": [\r
      "F-22",\r
      "F-28",\r
      "FB70",\r
      "Both A and C"\r
    ],\r
    "ans": 3\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "Which transaction code is used to post incoming customer payments?",\r
    "fact": "F-28 is used for posting customer incoming payments.",\r
    "opts": [\r
      "F-53",\r
      "F-28",\r
      "F-32",\r
      "F-44"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "What is an Open Item in AR?",\r
    "fact": "Outstanding customer transaction not yet cleared",\r
    "opts": [\r
      "Cleared customer invoice",\r
      "Outstanding customer transaction not yet cleared",\r
      "Posted asset transaction",\r
      "Tax posting"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "Which report displays customer balances?",\r
    "fact": "FBL5N displays Customer Line Items.",\r
    "opts": [\r
      "FBL3N",\r
      "FBL5N",\r
      "FBL1N",\r
      "FAGLL03"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "Which document is used to reduce customer receivables?",\r
    "fact": "Credit Memo",\r
    "opts": [\r
      "Debit Memo",\r
      "Credit Memo",\r
      "Vendor Invoice",\r
      "Goods Receipt"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "What is a Special G/L Transaction in AR?",\r
    "fact": "Down Payment from Customer",\r
    "opts": [\r
      "Normal Invoice",\r
      "Down Payment from Customer",\r
      "Tax Posting",\r
      "Depreciation"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "Which transaction code displays customer balances?",\r
    "fact": "FD10N",\r
    "opts": [\r
      "FD10N",\r
      "FK10N",\r
      "FS10N",\r
      "FBL5N"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "What happens when a customer invoice is posted?",\r
    "fact": "Customer account is debited Accounting Entry: Customer A/c Dr To Revenue A/c",\r
    "opts": [\r
      "Customer account is debited",\r
      "Revenue account is debited",\r
      "Vendor account is credited",\r
      "Asset account is credited"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "In SAP FI, a Customer Account is classified as:",\r
    "fact": "Customer accounts are subledger accounts used to record detailed customer transactions.",\r
    "opts": [\r
      "General Ledger Account",\r
      "Cost Element",\r
      "Subledger Account",\r
      "Asset Account"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "Why are Customer Accounts called Subledger Accounts?",\r
    "fact": "They store detailed customer-wise transactions and are linked to a G/L Reconciliation Account.",\r
    "opts": [\r
      "They are created in CO Module.",\r
      "They store detailed customer-wise transactions and are linked to a G/L Reconciliation Account.",\r
      "They replace G/L Accounts.",\r
      "They are temporary accounts."\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "Which account in the Customer Master links the customer subledger to the General Ledger?",\r
    "fact": "Reconciliation Account",\r
    "opts": [\r
      "Tax Account",\r
      "Revenue Account",\r
      "Reconciliation Account",\r
      "Cash Account"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "Can postings be made directly to a Customer Reconciliation Account?",\r
    "fact": "SAP automatically updates the reconciliation account through customer transactions.",\r
    "opts": [\r
      "Yes, always",\r
      "Yes, through FB50",\r
      "No, direct postings are not allowed",\r
      "Only during year-end closing"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "What is the main advantage of using Customer Subledger Accounts?",\r
    "fact": "Tracks customer-wise balances and transactions",\r
    "opts": [\r
      "Reduces master data",\r
      "Tracks customer-wise balances and transactions",\r
      "Eliminates G/L Accounts",\r
      "Avoids clearing"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "A Customer Account balance is automatically updated in:",\r
    "fact": "Reconciliation Account Customer Advance",\r
    "opts": [\r
      "Cost Center",\r
      "Internal Order",\r
      "Reconciliation Account",\r
      "Profit Center"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "Which transaction code is used to post a customer down payment?",\r
    "fact": "F-29",\r
    "opts": [\r
      "F-29",\r
      "F-48",\r
      "F-22",\r
      "F-32"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "What is a Customer Advance in SAP FI?",\r
    "fact": "A customer advance (down payment) is money received from a customer before the invoice is issued.",\r
    "opts": [\r
      "Payment received after invoice posting",\r
      "Payment received before goods/services are delivered or invoiced",\r
      "Vendor payment",\r
      "Credit Memo"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "Customer Advance is posted using which SAP functionality?",\r
    "fact": "Special G/L Transaction",\r
    "opts": [\r
      "Normal G/L Transaction",\r
      "Special G/L Transaction",\r
      "Asset Posting",\r
      "Accrual Posting"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "Why is a Special G/L Indicator used for Customer Advance?",\r
    "fact": "To separate advance payments from normal receivables",\r
    "opts": [\r
      "To calculate depreciation",\r
      "To separate advance payments from normal receivables",\r
      "To create assets",\r
      "To calculate taxes"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "What is the accounting entry when a Customer Advance of ₹50,000 is received?",\r
    "fact": "Bank A/c Dr ₹50,000 To Customer Down Payment A/c ₹50,000",\r
    "opts": [\r
      "Customer A/c Dr ₹50,000 To Bank A/c ₹50,000",\r
      "Bank A/c Dr ₹50,000 To Customer Down Payment A/c ₹50,000",\r
      "Revenue A/c Dr ₹50,000 To Customer A/c ₹50,000",\r
      "Customer A/c Dr ₹50,000 To Revenue A/c ₹50,000"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "Can Customer Advances be viewed separately from normal customer invoices?",\r
    "fact": "Yes, through Special G/L Transactions",\r
    "opts": [\r
      "No",\r
      "Only in G/L",\r
      "Yes, through Special G/L Transactions",\r
      "Only in Asset Accounting"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Accounts Receivables",\r
    "q": "Which transaction code is used to clear customer open items manually?",\r
    "fact": "F-32 is specifically used for Customer Account Clearing.",\r
    "opts": [\r
      "F-44",\r
      "F-03",\r
      "F-32",\r
      "F-28"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Dunning",\r
    "q": "What is the purpose of Dunning in SAP?",\r
    "fact": "Dunning is the process of sending payment reminders to customers for overdue invoices.",\r
    "opts": [\r
      "To post customer invoices",\r
      "To remind customers about overdue payments",\r
      "To create vendors",\r
      "To calculate depreciation"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Dunning",\r
    "q": "Which transaction code is commonly used for Dunning Run?",\r
    "fact": "F150",\r
    "opts": [\r
      "F110",\r
      "FBZP",\r
      "F150",\r
      "F-28"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Dunning",\r
    "q": "Where is the Dunning Procedure assigned?",\r
    "fact": "Customer Master",\r
    "opts": [\r
      "Material Master",\r
      "Vendor Master",\r
      "Customer Master",\r
      "Cost Center"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Dunning",\r
    "q": "What is a Dunning Level?",\r
    "fact": "Severity of reminder notices based on overdue days",\r
    "opts": [\r
      "Number of company codes",\r
      "Severity of reminder notices based on overdue days",\r
      "Number of customers",\r
      "Payment method"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Dunning",\r
    "q": "A customer invoice is overdue by 10 days. What determines whether a dunning notice is generated?",\r
    "fact": "Dunning Procedure Configuration",\r
    "opts": [\r
      "Material Type",\r
      "Dunning Procedure Configuration",\r
      "Plant",\r
      "Cost Center"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Dunning",\r
    "q": "How many Dunning Levels can be configured in a Dunning Procedure?",\r
    "fact": "Maximum 9",\r
    "opts": [\r
      "Maximum 3",\r
      "Maximum 5",\r
      "Maximum 9",\r
      "Unlimited"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Dunning",\r
    "q": "What are the main steps in the Dunning Process?",\r
    "fact": "Proposal Run → Dunning Run → Print Notices",\r
    "opts": [\r
      "Proposal Run → Dunning Run → Print Notices",\r
      "Invoice → Payment → Clearing",\r
      "PO → GR → IR",\r
      "Asset Acquisition → Depreciation"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Dunning",\r
    "q": "What is a Dunning Area in SAP?",\r
    "fact": "A Dunning Area allows separate dunning procedures for different business areas, divisions, or regions within the same company code.",\r
    "opts": [\r
      "A company code",\r
      "An organizational unit used for dunning within a company code",\r
      "A customer account group",\r
      "A payment method"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "Dunning",\r
    "q": "Which organizational level is a Dunning Area assigned to?",\r
    "fact": "Company Code",\r
    "opts": [\r
      "Client",\r
      "Controlling Area",\r
      "Company Code",\r
      "Plant"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "What does O2C stand for in SAP?",\r
    "fact": "Order to Cash",\r
    "opts": [\r
      "Order to Cost",\r
      "Order to Cash",\r
      "Order to Credit",\r
      "Order to Company"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "What is the correct O2C process sequence?",\r
    "fact": "Sales Order → Delivery → PGI → Billing → Customer Payment",\r
    "opts": [\r
      "Invoice → Sales Order → Delivery → Payment",\r
      "Sales Order → Delivery → PGI → Billing → Customer Payment",\r
      "PR → PO → GR → IR → Payment",\r
      "Sales Order → Payment → Delivery → Invoice"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "A billing document for ₹1,00,000 is created. Which FI entry is generated?",\r
    "fact": "Customer ₹1,00,000 Dr To Revenue ₹1,00,000",\r
    "opts": [\r
      "Revenue Dr ₹1,00,000 To Customer ₹1,00,000",\r
      "Customer ₹1,00,000 Dr To Revenue ₹1,00,000",\r
      "Bank ₹1,00,000 Dr To Customer ₹1,00,000",\r
      "Inventory ₹1,00,000 Dr To Revenue ₹1,00,000"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "A customer payment is received after billing. What is the accounting entry?",\r
    "fact": "Bank Dr To Customer",\r
    "opts": [\r
      "Customer Dr To Bank",\r
      "Bank Dr To Customer",\r
      "Revenue Dr To Customer",\r
      "Customer Dr To Revenue"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "Does creation of an Outbound Delivery generate an accounting document?",\r
    "fact": "Creating an Outbound Delivery (VL01N) is a logistics activity. No FI accounting document is generated at this stage.",\r
    "opts": [\r
      "Yes",\r
      "No",\r
      "Only for stock materials",\r
      "Only for services"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "At which stage is the first accounting entry generated in the delivery process?",\r
    "fact": "Post Goods Issue (PGI)",\r
    "opts": [\r
      "Sales Order",\r
      "Outbound Delivery",\r
      "Post Goods Issue (PGI)",\r
      "Billing"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "What is the accounting entry during PGI?",\r
    "fact": "COGS A/c Dr To Inventory A/c",\r
    "opts": [\r
      "Customer A/c Dr To Revenue A/c",\r
      "COGS A/c Dr To Inventory A/c",\r
      "Bank A/c Dr To Customer A/c",\r
      "Revenue A/c Dr To Customer A/c"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "Why is Inventory credited during PGI?",\r
    "fact": "Inventory leaves the warehouse",\r
    "opts": [\r
      "Inventory increases",\r
      "Inventory leaves the warehouse",\r
      "Revenue is recognized",\r
      "Customer pays"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "Which configuration determines the inventory and COGS accounts during PGI?",\r
    "fact": "OBYC controls automatic account determination for inventory postings.",\r
    "opts": [\r
      "VKOA",\r
      "OBYC",\r
      "FBN1",\r
      "OBA7"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "What happens to stock quantity after PGI?",\r
    "fact": "Decreases",\r
    "opts": [\r
      "Increases",\r
      "Remains unchanged",\r
      "Decreases",\r
      "Doubles"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "Which movement type is commonly used during PGI for sales delivery?",\r
    "fact": "601",\r
    "opts": [\r
      "101",\r
      "261",\r
      "601",\r
      "122"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "Which document is created after successful PGI?",\r
    "fact": "Material Document and Accounting Document",\r
    "opts": [\r
      "Asset Document",\r
      "Material Document and Accounting Document",\r
      "Vendor Invoice",\r
      "Purchase Order"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "When is Revenue recognized in the O2C cycle?",\r
    "fact": "Billing",\r
    "opts": [\r
      "Sales Order",\r
      "Delivery Creation",\r
      "PGI",\r
      "Billing"\r
    ],\r
    "ans": 3\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "What is the purpose of a Billing Document in SAP SD?",\r
    "fact": "To generate a customer invoice and update FI",\r
    "opts": [\r
      "To create a Purchase Order",\r
      "To generate a customer invoice and update FI",\r
      "To create a Delivery Document",\r
      "To create a Material Master"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "Which transaction code is used to create a Billing Document?",\r
    "fact": "VF01",\r
    "opts": [\r
      "VA01",\r
      "VL01N",\r
      "VF01",\r
      "FB70"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "Which document is generally required before creating a Billing Document?",\r
    "fact": "Delivery Document",\r
    "opts": [\r
      "Purchase Requisition",\r
      "Delivery Document (for standard sales process)",\r
      "Asset Master",\r
      "Vendor Invoice"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "At which stage is Revenue recognized in SAP SD?",\r
    "fact": "Billing Document Creation",\r
    "opts": [\r
      "Sales Order",\r
      "Delivery Creation",\r
      "Billing Document Creation",\r
      "Customer Payment"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "Which accounting entry is generated during Billing?",\r
    "fact": "Customer A/c Dr / Revenue A/c Cr",\r
    "opts": [\r
      "COGS Dr / Inventory Cr",\r
      "Customer A/c Dr / Revenue A/c Cr",\r
      "Bank A/c Dr / Customer A/c Cr",\r
      "Revenue A/c Dr / Customer A/c Cr"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "Which integration point connects SD Billing with FI?",\r
    "fact": "VKOA determines Revenue, Freight, Discount, and Tax G/L Accounts during billing.",\r
    "opts": [\r
      "OBYC",\r
      "VKOA",\r
      "OBA5",\r
      "FBN1"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "Which document is automatically created in FI after billing?",\r
    "fact": "Accounting Document",\r
    "opts": [\r
      "Material Document",\r
      "Accounting Document",\r
      "Purchase Order",\r
      "Asset Document"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "What is the relationship between Billing Document and Accounting Document?",\r
    "fact": "Billing automatically generates an Accounting Document",\r
    "opts": [\r
      "No relationship",\r
      "Billing automatically generates an Accounting Document",\r
      "Accounting Document creates Billing",\r
      "Billing updates only CO"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "Which account is debited during customer billing?",\r
    "fact": "Customer Reconciliation Account",\r
    "opts": [\r
      "Revenue Account",\r
      "Tax Account",\r
      "Customer Reconciliation Account",\r
      "Inventory Account"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "AR & O2C",\r
    "subclass": "O2C cycle",\r
    "q": "Can taxes be posted through the Billing Document?",\r
    "fact": "Yes",\r
    "opts": [\r
      "No",\r
      "Yes",\r
      "Only manually",\r
      "Only in ECC"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "P2P Cycle",\r
    "subclass": "P2P Cycle",\r
    "q": "Which transaction in MM creates an accounting document in FI during Goods Receipt?",\r
    "fact": "When Goods Receipt (GR) is posted through MIGO for a stock material, SAP generates an accounting document in FI.",\r
    "opts": [\r
      "ME21N",\r
      "MIGO",\r
      "MIRO",\r
      "XK01"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "P2P Cycle",\r
    "subclass": "P2P Cycle",\r
    "q": "Which accounts are typically affected during Goods Receipt (GR) for a standard PO?",\r
    "fact": "Inventory A/c & GR/IR A/c",\r
    "opts": [\r
      "Vendor A/c & Expense A/c",\r
      "Inventory A/c & GR/IR A/c",\r
      "Cash A/c & Vendor A/c",\r
      "Expense A/c & Cash A/c Inventory Account → Debit GR/IR Account → Credit"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "P2P Cycle",\r
    "subclass": "P2P Cycle",\r
    "q": "During Invoice Receipt (MIRO), which accounts are generally posted?",\r
    "fact": "Vendor & GR/IR",\r
    "opts": [\r
      "Inventory & Bank",\r
      "Vendor & GR/IR",\r
      "Vendor & Cash",\r
      "Expense & Cash GR/IR → Debit Vendor → Credit"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "P2P Cycle",\r
    "subclass": "P2P Cycle",\r
    "q": "What is the purpose of the GR/IR account?",\r
    "fact": "GR/IR clears the difference in timing between Goods Receipt and Invoice Receipt.",\r
    "opts": [\r
      "Tax Calculation",\r
      "Payment Processing",\r
      "clearing account between GR and Invoice Receipt",\r
      "Asset Accounting"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "P2P Cycle",\r
    "subclass": "P2P Cycle",\r
    "q": "Which transaction is used for Invoice Verification?",\r
    "fact": "MIRO posts the vendor invoice against the PO and Goods Receipt.",\r
    "opts": [\r
      "MIGO",\r
      "MIRO",\r
      "FB60",\r
      "F-53"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "P2P Cycle",\r
    "subclass": "P2P Cycle",\r
    "q": "Which FI configuration is mandatory for automatic account determination in MM?",\r
    "fact": "OBYC is used to define automatic postings from MM transactions to FI G/L accounts.",\r
    "opts": [\r
      "OB52",\r
      "OBYC",\r
      "OBA7",\r
      "FBN1"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "P2P Cycle",\r
    "subclass": "P2P Cycle",\r
    "q": "Which helps determine the G/L account during inventory postings?",\r
    "fact": "Valuation Class links materials to specific G/L accounts through OBYC.",\r
    "opts": [\r
      "Material Group",\r
      "Material Type",\r
      "Valuation Class",\r
      "Purchasing Group"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "P2P Cycle",\r
    "subclass": "P2P Cycle",\r
    "q": "Where is the Valuation Class maintained?",\r
    "fact": "Material Master - Accounting View",\r
    "opts": [\r
      "Vendor Master",\r
      "Purchasing Info Record",\r
      "Material Master - Accounting View",\r
      "Company Code"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "P2P Cycle",\r
    "subclass": "P2P Cycle",\r
    "q": "Which transaction key is used for Inventory Posting in OBYC?",\r
    "fact": "BSX controls Inventory Account postings.",\r
    "opts": [\r
      "WRX",\r
      "BSX",\r
      "GBB",\r
      "PRD"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "P2P Cycle",\r
    "subclass": "P2P Cycle",\r
    "q": "Which transaction key is used for GR/IR postings?",\r
    "fact": "WRX determines the GR/IR clearing account.",\r
    "opts": [\r
      "WRX",\r
      "BSX",\r
      "GBB",\r
      "PRD"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "P2P Cycle",\r
    "subclass": "P2P Cycle",\r
    "q": "Which transaction key is used for Goods Issue postings?",\r
    "fact": "GBB controls offsetting entries for goods movements such as consumption and scrapping.",\r
    "opts": [\r
      "BSX",\r
      "WRX",\r
      "GBB",\r
      "PRD"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "P2P Cycle",\r
    "subclass": "P2P Cycle",\r
    "q": "Which transaction key handles price differences?",\r
    "fact": "PRD is used when there are differences between standard price and actual purchase price",\r
    "opts": [\r
      "PRD",\r
      "WRX",\r
      "BSX",\r
      "GBB"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "P2P Cycle",\r
    "subclass": "P2P Cycle",\r
    "q": "What happens if a G/L account is not maintained in OBYC?",\r
    "fact": "Accounting document cannot be generated",\r
    "opts": [\r
      "System posts automatically",\r
      "Material is blocked",\r
      "Accounting document cannot be generated",\r
      "Vendor is blocked"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "P2P Cycle",\r
    "subclass": "P2P Cycle",\r
    "q": "What is the accounting entry during Vendor Payment?",\r
    "fact": "Vendor liability is cleared when payment is made.",\r
    "opts": [\r
      "Vendor Dr / Bank Cr",\r
      "Bank Dr / Vendor Cr",\r
      "Inventory Dr / Vendor Cr",\r
      "GR/IR Dr / Vendor Cr"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "P2P Cycle",\r
    "subclass": "P2P Cycle",\r
    "q": "A material has a Standard Price of ₹100. Invoice is received for ₹110. What is the Price Difference?",\r
    "fact": "Actual Price (₹110) - Standard Price (₹100) = ₹10 Price Difference.",\r
    "opts": [\r
      "₹0",\r
      "₹5",\r
      "₹10",\r
      "₹20"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "P2P Cycle",\r
    "subclass": "P2P Cycle",\r
    "q": "Which Price Control updates inventory value automatically with each procurement?",\r
    "fact": "Under MAP, inventory value adjusts automatically based on procurement cost.",\r
    "opts": [\r
      "Standard Price (S)",\r
      "Moving Average Price (V)",\r
      "Both",\r
      "None"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "P2P Cycle",\r
    "subclass": "P2P Cycle",\r
    "q": "Which Movement Type is used for Goods Receipt against a Purchase Order?",\r
    "fact": "Movement Type 101 is used for Goods Receipt (GR) against a Purchase Order.",\r
    "opts": [\r
      "101",\r
      "201",\r
      "261",\r
      "601"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "P2P Cycle",\r
    "subclass": "P2P Cycle",\r
    "q": "Which Movement Type is used to cancel a Goods Receipt posted with 101?",\r
    "fact": "Movement Type 102 reverses a 101 Goods Receipt.",\r
    "opts": [\r
      "102",\r
      "122",\r
      "262",\r
      "602"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "P2P Cycle",\r
    "subclass": "P2P Cycle",\r
    "q": "Which Movement Type is used for Goods Issue to a Cost Center?",\r
    "fact": "Material is consumed directly by a Cost Center.",\r
    "opts": [\r
      "201",\r
      "261",\r
      "301",\r
      "551"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "P2P Cycle",\r
    "subclass": "P2P Cycle",\r
    "q": "Which Movement Type is used for Goods Issue to a Production Order?",\r
    "fact": "261 is used to issue raw materials to a Production Order.",\r
    "opts": [\r
      "201",\r
      "261",\r
      "311",\r
      "601"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "P2P Cycle",\r
    "subclass": "P2P Cycle",\r
    "q": "Which Movement Type is used to reverse a Goods Issue posted with 261?",\r
    "fact": "262 is the reversal movement for 261.",\r
    "opts": [\r
      "262",\r
      "202",\r
      "312",\r
      "602"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "P2P Cycle",\r
    "subclass": "P2P Cycle",\r
    "q": "Which Movement Type is used for Goods Issue to Customer (Outbound Delivery)?",\r
    "fact": "601 is used when goods are issued to a customer during delivery.",\r
    "opts": [\r
      "601",\r
      "641",\r
      "261",\r
      "201"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payables",\r
    "q": "What is the main purpose of Accounts Payable in SAP FI?",\r
    "fact": "Accounts Payable (AP) is used to record and manage all transactions related to vendors, such as invoices, payments, and credit memos.",\r
    "opts": [\r
      "Manage customer transactions",\r
      "Manage vendor transactions",\r
      "Manage asset transactions",\r
      "Manage cost centers"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payables",\r
    "q": "Which T-Code is used to create a Vendor Invoice?",\r
    "fact": "FB60 is used to post vendor invoices without reference to a purchase order.",\r
    "opts": [\r
      "F-02",\r
      "FB60",\r
      "F-53",\r
      "F-28"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payables",\r
    "q": "Which T-Code is used for Vendor Payment?",\r
    "fact": "F-53 is used for manual outgoing payments to vendors.",\r
    "opts": [\r
      "F-28",\r
      "F-53",\r
      "FB60",\r
      "FBL1N"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payables",\r
    "q": "Which report displays Vendor Line Items?",\r
    "fact": "FBL1N displays vendor account line items.",\r
    "opts": [\r
      "FBL3N",\r
      "FBL5N",\r
      "FBL1N",\r
      "FS10N"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payables",\r
    "q": "Which account type is used for Vendors?",\r
    "fact": "In SAP, account type \\"K\\" represents Vendors (Creditor).",\r
    "opts": [\r
      "D",\r
      "S",\r
      "K",\r
      "A"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payables",\r
    "q": "What happens when a Vendor Invoice is posted?",\r
    "fact": "Vendor liability increases, so Vendor Account is credited and Expense Account is debited.",\r
    "opts": [\r
      "Vendor Account is Debited",\r
      "Expense Account is Credited",\r
      "Vendor Account is Credited",\r
      "Customer Account is Credited"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payables",\r
    "q": "What is a Vendor Reconciliation Account?",\r
    "fact": "Vendor balances are automatically updated in the reconciliation account.",\r
    "opts": [\r
      "Expense Account",\r
      "Revenue Account",\r
      "Control Account linked to Vendor Subledger",\r
      "Asset Account"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payables",\r
    "q": "Can postings be made directly to a Vendor Reconciliation Account?",\r
    "fact": "Direct postings are not allowed. Updates happen automatically through vendor transactions.",\r
    "opts": [\r
      "Yes",\r
      "No",\r
      "Only by FI Consultant",\r
      "Only through F-02"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payables",\r
    "q": "Which transaction displays Vendor Balances?",\r
    "fact": "Vendor line items and balances can be viewed using FBL1N.",\r
    "opts": [\r
      "FS10N",\r
      "FBL1N",\r
      "FBL5N",\r
      "FD10N"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payables",\r
    "q": "What is the purpose of a Credit Memo in Accounts Payable?",\r
    "fact": "A credit memo is received from the vendor and reduces the amount payable.",\r
    "opts": [\r
      "Increase Vendor Liability",\r
      "Reduce Vendor Liability",\r
      "Increase Revenue",\r
      "Increase Assets"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payable Quiz",\r
    "q": "Which T-Code is used to display Vendor Master Data?",\r
    "fact": "XK03 displays vendor master data at all organizational levels.",\r
    "opts": [\r
      "XK03",\r
      "XK01",\r
      "XK02",\r
      "FK03"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payable Quiz",\r
    "q": "What is the purpose of Payment Terms?",\r
    "fact": "Payment terms define due dates and cash discount periods.",\r
    "opts": [\r
      "Determine Tax",\r
      "Determine Due Date and Discount",\r
      "Determine Exchange Rate",\r
      "Determine GL Account"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payable Quiz",\r
    "q": "Which T-Code is used for Automatic Payment Program?",\r
    "fact": "F110 is used to execute automatic payments to vendors and customers.",\r
    "opts": [\r
      "F110",\r
      "F111",\r
      "FBZP",\r
      "F-53"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payable Quiz",\r
    "q": "Which configuration transaction is used for Automatic Payment Program settings?",\r
    "fact": "FBZP is used to configure payment methods, bank determination, and company code settings.",\r
    "opts": [\r
      "OB52",\r
      "FBZP",\r
      "OBA7",\r
      "FSP0"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payable Quiz",\r
    "q": "Which T-Code is used to create Vendor Master?",\r
    "fact": "XK01 creates vendor master data centrally.",\r
    "opts": [\r
      "XK01",\r
      "XK02",\r
      "XK03",\r
      "FK03"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payable Quiz",\r
    "q": "What is a Down Payment to a Vendor?",\r
    "fact": "Down payments are advance payments made to vendors before invoice receipt.",\r
    "opts": [\r
      "Invoice Adjustment",\r
      "Advance Payment before Goods/Services",\r
      "Credit Memo",\r
      "Tax Posting"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payable Quiz",\r
    "q": "Which Special G/L Indicator is commonly used for Vendor Down Payments?",\r
    "fact": "Special G/L Indicator \\"A\\" is generally used for Vendor Down Payments.",\r
    "opts": [\r
      "A",\r
      "F",\r
      "H",\r
      "D"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payable Quiz",\r
    "q": "What is the accounting entry for a Vendor Invoice?",\r
    "fact": "Expense increases (Debit) and Vendor Liability increases (Credit).",\r
    "opts": [\r
      "Vendor Dr / Expense Cr",\r
      "Expense Dr / Vendor Cr",\r
      "Cash Dr / Vendor Cr",\r
      "Vendor Dr / Cash Cr"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payable Quiz",\r
    "q": "What is the purpose of Open Item Management in Vendor Accounts?",\r
    "fact": "Open Item Management helps track unpaid invoices and payments.",\r
    "opts": [\r
      "Manage Assets",\r
      "Track Outstanding Vendor Items",\r
      "Calculate Depreciation",\r
      "Post Taxes"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payables",\r
    "q": "Vendor Number Ranges are created at which level in SAP?",\r
    "fact": "Client Level",\r
    "opts": [\r
      "Company Code Level",\r
      "Purchasing Organization Level",\r
      "Plant Level",\r
      "Client Level"\r
    ],\r
    "ans": 3\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payables",\r
    "q": "Vendor Document Number Ranges are created at which level in SAP?",\r
    "fact": "Company Code Level",\r
    "opts": [\r
      "Client Level",\r
      "Company Code Level",\r
      "Purchasing Organization Level",\r
      "Plant Level"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payables",\r
    "q": "Which transaction is used to clear Vendor Open Items manually?",\r
    "fact": "F-44 is used for manual clearing of vendor open items.",\r
    "opts": [\r
      "F-44",\r
      "F-32",\r
      "F-03",\r
      "F-28"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payables",\r
    "q": "Which transaction code is commonly used to post a Vendor Down Payment?",\r
    "fact": "F-48 is used to post a Vendor Down Payment request or advance payment.",\r
    "opts": [\r
      "F-28",\r
      "F-53",\r
      "F-48",\r
      "FB60"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payables",\r
    "q": "A Vendor Down Payment is recorded as:",\r
    "fact": "Down Payments are managed through Special G/L transactions.",\r
    "opts": [\r
      "Normal Vendor Liability",\r
      "Special G/L Transaction",\r
      "Asset Transaction",\r
      "Customer Transaction"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payables",\r
    "q": "Which account is usually debited when making a Vendor Advance Payment?",\r
    "fact": "The Vendor Down Payment Account (Special G/L Account) is debited when an advance payment is made.",\r
    "opts": [\r
      "Vendor Reconciliation Account",\r
      "Expense Account",\r
      "Vendor Spl GL Reconciliation Account",\r
      "Revenue Account"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payables",\r
    "q": "Why do we use Special G/L Transactions for Down Payments?",\r
    "fact": "Special G/L transactions keep advance payments separate from regular vendor balances.",\r
    "opts": [\r
      "To post tax automatically",\r
      "To separate advance payments from normal vendor liabilities",\r
      "To create assets automatically",\r
      "To calculate depreciation"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payables",\r
    "q": "Which report can display Vendor Down Payment items?",\r
    "fact": "FBL1N can display normal and Special G/L transactions by selecting Special G/L indicators.",\r
    "opts": [\r
      "FBL1N",\r
      "FBL3N",\r
      "FBL5N",\r
      "FS10N"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Accounts Payables",\r
    "q": "What happens when the Vendor Invoice is received after an advance payment?",\r
    "fact": "The advance payment is cleared and adjusted against the vendor invoice through F-54 or F-53",\r
    "opts": [\r
      "Advance Payment is ignored",\r
      "Advance Payment is adjusted against the invoice using clearing",\r
      "New vendor is created",\r
      "Asset is created automatically"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Reversals",\r
    "q": "What is the purpose of a document reversal in SAP?",\r
    "fact": "SAP does not allow deletion of posted accounting documents. Instead, a reversal document is created to negate the original posting.",\r
    "opts": [\r
      "To delete a posted document permanently",\r
      "To cancel the effect of an incorrect posting",\r
      "To archive documents",\r
      "To create a new company code"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Reversals",\r
    "q": "Which T-Code is commonly used to reverse an accounting document?",\r
    "fact": "FB08 is the standard transaction used to reverse FI documents.",\r
    "opts": [\r
      "FB60",\r
      "F-53",\r
      "FB08",\r
      "FBL3N"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Reversals",\r
    "q": "What happens when a document is reversed?",\r
    "fact": "SAP creates a reversal document that contains opposite debit and credit entries.",\r
    "opts": [\r
      "The original document is deleted",\r
      "A new reversal document is created with opposite postings",\r
      "The vendor is deleted",\r
      "The GL account is blocked"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Reversals",\r
    "q": "What is a Reversal Reason in SAP?",\r
    "fact": "Reversal reasons determine whether the reversal is posted in the current date or original posting period.",\r
    "opts": [\r
      "A reason for creating a company code",\r
      "A reason that controls reversal posting behavior",\r
      "A vendor classification",\r
      "A tax code"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Payment Terms & Cash Discount",\r
    "q": "Where are Payment Terms maintained in SAP?",\r
    "fact": "Payment Terms are maintained in Vendor and Customer master records and can be defaulted during document posting.",\r
    "opts": [\r
      "Vendor Master and Customer Master",\r
      "Material Master",\r
      "Asset Master",\r
      "Cost Center Master"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Payment Terms & Cash Discount",\r
    "q": "Which transaction code is used to define Payment Terms?",\r
    "fact": "OBB8 is used to create and maintain Payment Terms.",\r
    "opts": [\r
      "OBB8",\r
      "OB52",\r
      "FBN1",\r
      "FS00"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Payment Terms & Cash Discount",\r
    "q": "Which of the following can be controlled by Payment Terms?",\r
    "fact": "Payment Terms determine the baseline date, discount periods, discount percentages, and net due date.",\r
    "opts": [\r
      "Baseline Date",\r
      "Cash Discount Percentage",\r
      "Due Date",\r
      "All of the Above"\r
    ],\r
    "ans": 3\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Payment Terms & Cash Discount",\r
    "q": "The Baseline Date is used to:",\r
    "fact": "SAP calculates payment due dates and discount dates based on the baseline date.",\r
    "opts": [\r
      "Calculate Depreciation",\r
      "Calculate Due Date and Discount Date",\r
      "Determine Tax Amount",\r
      "Create Vendor Master"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Payment Terms & Cash Discount",\r
    "q": "Can Payment Terms entered in an invoice override the Vendor Master Payment Terms?",\r
    "fact": "Users can overwrite default payment terms during document entry if authorized.",\r
    "opts": [\r
      "No",\r
      "Yes",\r
      "Only by SAP Basis",\r
      "Only in S/4HANA"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Payment Terms & Cash Discount",\r
    "q": "What happens if payment is made after the discount period but before the due date?",\r
    "fact": "Once the discount period expires, the full invoice amount becomes payable until the due date.",\r
    "opts": [\r
      "Cash Discount is available",\r
      "Full Invoice Amount must be paid",\r
      "Vendor is blocked",\r
      "Invoice is reversed"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "House Bank",\r
    "q": "What is a House Bank in SAP?",\r
    "fact": "A House Bank represents the organization's bank account used for payments.",\r
    "opts": [\r
      "Customer Bank",\r
      "Company's Own Bank Account",\r
      "Vendor Bank",\r
      "Central Bank"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Automatic Payment Program (APP) - FBZP",\r
    "q": "What is the purpose of the Automatic Payment Program (APP) in SAP?",\r
    "fact": "APP automates the payment process for vendors and customers, reducing manual effort and errors.",\r
    "opts": [\r
      "Create Vendor Master Data",\r
      "Automatically process customer and vendor payments",\r
      "Create G/L Accounts",\r
      "Calculate Depreciation"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Automatic Payment Program (APP) - FBZP",\r
    "q": "APP can process payments for:",\r
    "fact": "APP supports both outgoing and incoming payments.",\r
    "opts": [\r
      "Vendors Only",\r
      "Customers Only",\r
      "Vendors and Customers",\r
      "Assets Only"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Automatic Payment Program (APP) - FBZP",\r
    "q": "What is the purpose of the Proposal Run?",\r
    "fact": "The proposal allows users to verify payment selections before posting.",\r
    "opts": [\r
      "Create Payment Document",\r
      "Test and review payments before execution",\r
      "Reverse Payments",\r
      "Create Vendor Master"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Automatic Payment Program (APP) - FBZP",\r
    "q": "Which step creates accounting entries and payment documents?",\r
    "fact": "The Payment Run posts accounting entries and clears open items.",\r
    "opts": [\r
      "Proposal Run",\r
      "Edit Proposal",\r
      "Payment Run",\r
      "Payment Medium Workbench"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Automatic Payment Program (APP) - FBZP",\r
    "q": "APP selects invoices based on:",\r
    "fact": "APP evaluates all payment-related criteria before selecting items.",\r
    "opts": [\r
      "Payment Terms",\r
      "Due Date",\r
      "Payment Method",\r
      "All of the Above"\r
    ],\r
    "ans": 3\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Automatic Payment Program (APP) - FBZP",\r
    "q": "Which table stores House Bank information?",\r
    "fact": "House Bank master data is stored in table T012",\r
    "opts": [\r
      "T012",\r
      "BKPF",\r
      "BSEG",\r
      "LFA1"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Automatic Payment Program (APP) - FBZP",\r
    "q": "What happens after a successful Payment Run?",\r
    "fact": "APP clears the selected vendor/customer open items",\r
    "opts": [\r
      "Open Items remain unchanged",\r
      "Open Items are cleared",\r
      "Vendor Master is updated",\r
      "Fiscal Year is closed"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Automatic Payment Program (APP) - FBZP",\r
    "q": "What is Bank Determination in APP?",\r
    "fact": "SAP determines from which House Bank and account the payment should be made",\r
    "opts": [\r
      "Selecting the appropriate bank account for payment processing",\r
      "Creating Vendor Banks",\r
      "Maintaining Exchange Rates",\r
      "Creating Payment Terms"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Automatic Payment Program (APP) - FBZP",\r
    "q": "Which payment method can be used in APP?",\r
    "fact": "APP supports multiple payment methods based on configuration.",\r
    "opts": [\r
      "Cheque",\r
      "Bank Transfer",\r
      "Electronic Transfer",\r
      "All of the Above"\r
    ],\r
    "ans": 3\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Automatic Payment Program (APP) - FBZP",\r
    "q": "What is the purpose of Ranking Order in APP?",\r
    "fact": "Ranking Order defines the sequence in which House Banks are used.",\r
    "opts": [\r
      "Select Vendor Priority",\r
      "Select Customer Priority",\r
      "Determine which House Bank is used first",\r
      "Determine Tax Calculation"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Automatic Payment Program (APP) - FBZP",\r
    "q": "Which transaction is used to display APP payment logs?",\r
    "fact": "Payment logs and proposal logs can be viewed within F110.",\r
    "opts": [\r
      "F110",\r
      "FB03",\r
      "FBL1N",\r
      "F-53"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Automatic Payment Program (APP) - FBZP",\r
    "q": "Which master data must contain bank details for electronic payments?",\r
    "fact": "Vendor bank details are required for electronic fund transfers",\r
    "opts": [\r
      "G/L Master",\r
      "Vendor Master",\r
      "Cost Center Master",\r
      "Asset Master"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "GST (Goods and Service Tax)",\r
    "q": "What is GST?",\r
    "fact": "GST is an indirect tax levied on the supply of goods and services.",\r
    "opts": [\r
      "General Sales Tax",\r
      "Goods and Services Tax",\r
      "Global Service Tax",\r
      "Government Service Tax"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "GST (Goods and Service Tax)",\r
    "q": "What is the primary purpose of a Tax Code in SAP?",\r
    "fact": "Tax Codes enable SAP to calculate tax and post it to the appropriate tax accounts.",\r
    "opts": [\r
      "Create Vendors",\r
      "Calculate and Post Taxes Automatically",\r
      "Create Assets",\r
      "Determine Payment Terms"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "GST (Goods and Service Tax)",\r
    "q": "Which transaction code is used to create Tax Codes?",\r
    "fact": "FTXP is used to create and maintain tax codes.",\r
    "opts": [\r
      "FTXP",\r
      "OB40",\r
      "OBCN",\r
      "FBN1"\r
    ],\r
    "ans": 0\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "GST (Goods and Service Tax)",\r
    "q": "Which configuration transaction is used to assign G/L Accounts to Tax Codes?",\r
    "fact": "OB40 is used to assign input and output tax accounts",\r
    "opts": [\r
      "OBB8",\r
      "OB40",\r
      "FBZP",\r
      "OB52"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "GST (Goods and Service Tax)",\r
    "q": "What is Input GST?",\r
    "fact": "Input GST is the tax paid on purchases and can generally be claimed as Input Tax Credit (ITC).",\r
    "opts": [\r
      "GST collected from customers",\r
      "GST paid on purchases",\r
      "GST payable to government",\r
      "GST on exports"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "GST (Goods and Service Tax)",\r
    "q": "What is Output GST?",\r
    "fact": "Output GST is collected from customers and paid to the government.",\r
    "opts": [\r
      "GST paid on purchases",\r
      "GST collected from customers on sales",\r
      "GST refund received",\r
      "GST on imports"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "GST (Goods and Service Tax)",\r
    "q": "During a Vendor Invoice posting, GST is usually treated as:",\r
    "fact": "Purchase transactions result in Input GST.",\r
    "opts": [\r
      "Output Tax",\r
      "Input Tax",\r
      "Withholding Tax",\r
      "Service Tax"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "GST (Goods and Service Tax)",\r
    "q": "During a Customer Invoice posting, GST is usually treated as:",\r
    "fact": "Sales transactions result in Output GST.",\r
    "opts": [\r
      "Input Tax",\r
      "Output Tax",\r
      "Advance Tax",\r
      "TDS"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Withholding Tax/TDS",\r
    "q": "What is the purpose of Withholding Tax in SAP?",\r
    "fact": "Withholding Tax (WHT) is used to deduct tax at source from vendor payments as per statutory requirements.",\r
    "opts": [\r
      "To calculate GST",\r
      "To deduct tax at source during payment or invoice posting",\r
      "To calculate depreciation",\r
      "To determine exchange rates"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Withholding Tax/TDS",\r
    "q": "Which transaction code is commonly used to configure Withholding Tax?",\r
    "fact": "Withholding Tax settings are configured through SPRO under Financial Accounting → Accounts Receivable and Accounts Payable.",\r
    "opts": [\r
      "FB60",\r
      "OBY6",\r
      "SPRO (Extended Withholding Tax Configuration)",\r
      "F-53"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Withholding Tax/TDS",\r
    "q": "At which level is Withholding Tax information maintained for vendors?",\r
    "fact": "Vendor withholding tax details are maintained at the Company Code segment of the vendor master.",\r
    "opts": [\r
      "Client Level",\r
      "Company Code Level",\r
      "Purchasing Organization Level",\r
      "Plant Level"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Withholding Tax/TDS",\r
    "q": "Which master data contains Withholding Tax information?",\r
    "fact": "Vendor Master contains withholding tax type, code, exemption details, etc.",\r
    "opts": [\r
      "Material Master",\r
      "Customer Master",\r
      "Vendor Master",\r
      "Cost Center Master"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Withholding Tax/TDS",\r
    "q": "When can Withholding Tax be calculated?",\r
    "fact": "Depending on configuration, WHT can be deducted during invoice or payment processing.",\r
    "opts": [\r
      "At Invoice Posting",\r
      "At Payment Posting",\r
      "Both Invoice and Payment Time whatever is early",\r
      "Only Year-End"\r
    ],\r
    "ans": 2\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Withholding Tax/TDS",\r
    "q": "Can one vendor have multiple Withholding Tax Types?",\r
    "fact": "Extended WHT allows multiple tax types for the same vendor.",\r
    "opts": [\r
      "No",\r
      "Yes",\r
      "Only in ECC",\r
      "Only in MM"\r
    ],\r
    "ans": 1\r
  },\r
  {\r
    "type": "mc",\r
    "section": "Accounts Payable",\r
    "subclass": "Withholding Tax/TDS",\r
    "q": "What is the impact of Withholding Tax on vendor payment?",\r
    "fact": "Tax amount is deducted and only the net amount is paid to the vendor.",\r
    "opts": [\r
      "Increases payment amount",\r
      "Reduces payment amount paid to vendor",\r
      "No impact",\r
      "Deletes invoice"\r
    ],\r
    "ans": 1\r
  }\r
];\r
const LABELS = ['A','B','C','D'];\r
const SECTION_ORDER = [\r
  'General Ledger',\r
  'Accounts Payable',\r
  'P2P Cycle',\r
  'AR & O2C',\r
  'Controlling',\r
  'S/4HANA & Project'\r
];\r
const SUBCLASS_ORDER = {\r
  'General Ledger': [\r
    'SAP FICO Enterprise Structure',\r
    'General Ledger Accounting (New)',\r
    'Financial Accounting Global Settings (New)',\r
    'Accounting Concepts',\r
    'Controlling',\r
    'Master data'\r
  ]\r
};\r
let current = 0, score = 0, triedWrong = false;\r
let streak = 0, bestStreak = 0;\r
let selectedSection = 'ALL', selectedSubclass = 'ALL';\r
let pool = []; // shuffled question pool for the current cycle\r
\r
const root      = document.getElementById('quiz-root');\r
const heroFill  = document.getElementById('hero-fill');\r
const heroLabel = document.getElementById('hero-label');\r
const heroTitle = document.getElementById('hero-title');\r
const heroSub   = document.getElementById('hero-sub');\r
const streakValue = document.getElementById('streak-value');\r
const bestStreakValue = document.getElementById('best-streak-value');\r
\r
// Fisher-Yates shuffle — returns a new shuffled copy, never mutates original\r
function shuffleArray(arr) {\r
  const a = [...arr];\r
  for (let i = a.length - 1; i > 0; i--) {\r
    const j = Math.floor(Math.random() * (i + 1));\r
    [a[i], a[j]] = [a[j], a[i]];\r
  }\r
  return a;\r
}\r
\r
// Shuffle a single MC question's options and update the correct-answer index\r
function shuffleOpts(q) {\r
  if (q.type !== 'mc') return { ...q };\r
  // pair each option text with whether it is the correct answer\r
  const pairs = q.opts.map((opt, i) => ({ opt, correct: i === q.ans }));\r
  const shuffled = shuffleArray(pairs);\r
  return {\r
    ...q,\r
    opts: shuffled.map(p => p.opt),\r
    ans:  shuffled.findIndex(p => p.correct)\r
  };\r
}\r
\r
// Build a fresh pool for one cycle:\r
// 1. Shuffle question order\r
// 2. For every MC question, also shuffle its answer options\r
function getFilteredQuestions() {\r
  return QUESTIONS.filter(q =>\r
    (selectedSection === 'ALL' || q.section === selectedSection) &&\r
    (selectedSubclass === 'ALL' || q.subclass === selectedSubclass)\r
  );\r
}\r
\r
function buildPool() {\r
  return shuffleArray(getFilteredQuestions()).map(q => shuffleOpts(q));\r
}\r
\r
function uniqueSorted(items) {\r
  return [...new Set(items.filter(Boolean))].sort((a, b) => a.localeCompare(b));\r
}\r
\r
function sectionOptions() {\r
  const available = new Set(QUESTIONS.map(q => q.section));\r
  return ['ALL', ...SECTION_ORDER.filter(section => available.has(section))];\r
}\r
\r
function subclassOptions() {\r
  const scoped = selectedSection === 'ALL'\r
    ? QUESTIONS\r
    : QUESTIONS.filter(q => q.section === selectedSection);\r
  const available = new Set(scoped.map(q => q.subclass).filter(Boolean));\r
  const preferred = SUBCLASS_ORDER[selectedSection] || [];\r
  const ordered = preferred.filter(subclass => available.has(subclass));\r
  const remaining = uniqueSorted([...available].filter(subclass => !preferred.includes(subclass)));\r
  return ['ALL', ...ordered, ...remaining];\r
}\r
\r
function optionLabel(value, allLabel) {\r
  return value === 'ALL' ? allLabel : value;\r
}\r
\r
function renderSelectOptions(values, selected, allLabel) {\r
  return values.map(value => \`\r
    <option value="\${value}" \${value === selected ? 'selected' : ''}>\${optionLabel(value, allLabel)}</option>\r
  \`).join('');\r
}\r
\r
function renderStart() {\r
  document.body.classList.add('start-mode');\r
  const available = getFilteredQuestions().length;\r
  heroFill.style.width = '0%';\r
  heroLabel.textContent = '';\r
  heroTitle.innerHTML = 'SAP FICO <span class="gold">Challenge</span>';\r
  heroSub.textContent = '';\r
  streakValue.textContent = 0;\r
  bestStreakValue.textContent = 0;\r
  root.innerHTML = \`\r
    <div class="start-card">\r
      <div class="start-icon">🎯</div>\r
      <div class="start-title">\${available} Questions · 1 Score · ∞ Bragging Rights</div>\r
      <div class="topic-picker">\r
        <div class="topic-field">\r
          <label for="section-select">Section</label>\r
          <select class="topic-select" id="section-select" onchange="changeSection(this.value)">\r
            \${renderSelectOptions(sectionOptions(), selectedSection, 'All Sections')}\r
          </select>\r
        </div>\r
        <div class="topic-field">\r
          <label for="subclass-select">Subclass</label>\r
          <select class="topic-select" id="subclass-select" onchange="changeSubclass(this.value)">\r
            \${renderSelectOptions(subclassOptions(), selectedSubclass, 'All Subclasses')}\r
          </select>\r
        </div>\r
      </div>\r
      <div class="topic-count">\${available} questions selected</div>\r
      <button class="start-btn" onclick="startChallenge()">Start the Challenge <span>→</span></button>\r
    </div>\r
  \`;\r
}\r
\r
function changeSection(value) {\r
  selectedSection = value;\r
  selectedSubclass = 'ALL';\r
  renderStart();\r
}\r
\r
function changeSubclass(value) {\r
  selectedSubclass = value;\r
  renderStart();\r
}\r
\r
function startChallenge() {\r
  document.body.classList.remove('start-mode');\r
  current = 0;\r
  score = 0;\r
  streak = 0;\r
  bestStreak = 0;\r
  pool = buildPool();\r
  if (!pool.length) {\r
    renderStart();\r
    return;\r
  }\r
  render();\r
}\r
\r
function updateHero(pct, qNum, total) {\r
  heroFill.style.width = pct + '%';\r
  heroLabel.textContent = \`Question \${qNum} of \${total}\`;\r
  heroTitle.innerHTML = 'SAP FICO <span class="gold">Challenge</span>';\r
  heroSub.textContent   = \`\${score} correct so far\`;\r
  streakValue.textContent = streak;\r
  bestStreakValue.textContent = bestStreak;\r
}\r
\r
function render() {\r
  document.body.classList.remove('start-mode');\r
  if (current >= pool.length) { renderResult(); return; }\r
\r
  const q   = pool[current];\r
  const pct = Math.round((current / pool.length) * 100);\r
  triedWrong = false;\r
\r
  updateHero(pct, current + 1, pool.length);\r
\r
  const typeTag = q.type === 'yn'\r
    ? '<span style="color:#38bdf8;font-weight:700;">Yes / No</span>'\r
    : '<span style="color:#38bdf8;font-weight:700;">Multiple Choice</span>';\r
\r
  root.innerHTML = \`\r
    <div class="question-card" id="q-card">\r
      <div class="question-label">Question \${current + 1} &nbsp;·&nbsp; \${typeTag}</div>\r
      <div class="question-topic">\${q.section} &nbsp;·&nbsp; \${q.subclass}</div>\r
      <div class="question-text">\${q.q}</div>\r
      \${q.type === 'mc' ? buildMC(q) : buildYN()}\r
      <div class="hint-text" id="hint">That's not right — try again!</div>\r
      <div class="explanation" id="expl"></div>\r
    </div>\r
    <div class="next-wrap">\r
      <button class="next-btn" id="next-btn" onclick="advance()">\r
        \${current + 1 === pool.length ? 'See results \\u2192' : 'Next question \\u2192'}\r
      </button>\r
    </div>\r
  \`;\r
}\r
\r
function buildMC(q) {\r
  return \`<div class="mc-options">\r
    \${q.opts.map((opt, i) => \`\r
      <button class="mc-btn" id="mc-\${i}" onclick="pickMC(\${i})">\r
        <span class="mc-letter">\${LABELS[i]}</span>\${opt}\r
      </button>\`).join('')}\r
  </div>\`;\r
}\r
\r
function buildYN() {\r
  return \`<div class="yn-options">\r
    <button class="yn-btn yes-btn" id="btn-yes" onclick="pickYN(true)">\r
      <span class="yn-icon">\\u2705</span>Yes\r
    </button>\r
    <button class="yn-btn no-btn" id="btn-no" onclick="pickYN(false)">\r
      <span class="yn-icon">\\u274c</span>No\r
    </button>\r
  </div>\`;\r
}\r
\r
function onCorrect(el) {\r
  if (!triedWrong) score++;\r
  streak++;\r
  bestStreak = Math.max(bestStreak, streak);\r
  document.querySelectorAll('.mc-btn, .yn-btn').forEach(b => b.disabled = true);\r
  el.classList.add('correct');\r
  showSuccess();\r
  launchConfetti(el);\r
  document.getElementById('hint').classList.remove('show');\r
  const expl = document.getElementById('expl');\r
  expl.innerHTML = \`<div class="expl-title">\\ud83d\\udca1 Explanation</div>\${pool[current].fact}\`;\r
  expl.classList.add('show');\r
  document.getElementById('next-btn').classList.add('show');\r
  heroSub.textContent = \`\${score} correct so far\`;\r
  streakValue.textContent = streak;\r
  bestStreakValue.textContent = bestStreak;\r
}\r
\r
function onWrong(el) {\r
  triedWrong = true;\r
  streak = 0;\r
  streakValue.textContent = streak;\r
  el.classList.add('wrong');\r
  el.disabled = true;\r
  const card = document.getElementById('q-card');\r
  card.classList.remove('shake');\r
  void card.offsetWidth;\r
  card.classList.add('shake');\r
  document.getElementById('oops-overlay').classList.add('show');\r
}\r
\r
function closeOops() {\r
  document.getElementById('oops-overlay').classList.remove('show');\r
}\r
\r
function showSuccess() {\r
  const popup = document.getElementById('success-overlay');\r
  popup.classList.add('show');\r
  setTimeout(() => popup.classList.remove('show'), 900);\r
}\r
\r
function launchConfetti(origin) {\r
  const rect = origin.getBoundingClientRect();\r
  const colors = ['#1d4ed8', '#38bdf8', '#facc15', '#22c55e', '#94a3b8'];\r
  for (let i = 0; i < 52; i++) {\r
    const piece = document.createElement('span');\r
    const angle = (Math.PI * 2 * i) / 52;\r
    const distance = 120 + Math.random() * 280;\r
    piece.className = 'confetti-piece';\r
    piece.style.setProperty('--x', \`\${rect.left + rect.width / 2 + (Math.random() - 0.5) * 220}px\`);\r
    piece.style.setProperty('--y', \`\${rect.top + rect.height / 2 + (Math.random() - 0.5) * 120}px\`);\r
    piece.style.setProperty('--dx', \`\${Math.cos(angle) * distance}px\`);\r
    piece.style.setProperty('--dy', \`\${Math.sin(angle) * distance - 80}px\`);\r
    piece.style.setProperty('--c', colors[i % colors.length]);\r
    document.body.appendChild(piece);\r
    setTimeout(() => piece.remove(), 1250);\r
  }\r
}\r
\r
function pickMC(idx) {\r
  const btn = document.getElementById(\`mc-\${idx}\`);\r
  if (!btn || btn.disabled) return;\r
  idx === pool[current].ans ? onCorrect(btn) : onWrong(btn);\r
}\r
\r
function pickYN(val) {\r
  const btn = document.getElementById(val ? 'btn-yes' : 'btn-no');\r
  if (!btn || btn.disabled) return;\r
  val === pool[current].ans ? onCorrect(btn) : onWrong(btn);\r
}\r
\r
function advance() {\r
  current++;\r
  // Re-shuffle the next MC question's options so every visit is fresh\r
  if (current < pool.length && pool[current].type === 'mc') {\r
    pool[current] = shuffleOpts(pool[current]);\r
  }\r
  render();\r
}\r
\r
function renderResult() {\r
  const pct = Math.round((score / pool.length) * 100);\r
  heroFill.style.width = '100%';\r
  heroLabel.textContent = 'Quiz Complete!';\r
  heroSub.textContent   = \`Final score: \${score} / \${pool.length}\`;\r
\r
  const tiers = [\r
    { max: 40,  emoji: '\\ud83d\\ude05', msg: "Keep going — every expert started somewhere!" },\r
    { max: 65,  emoji: '\\ud83d\\ude42', msg: "Not bad! You have a solid SAP FICO base." },\r
    { max: 85,  emoji: '\\ud83d\\ude0a', msg: "Great work! You are strong on SAP FICO concepts." },\r
    { max: 100, emoji: '\\ud83c\\udfc6', msg: "Outstanding! You are ready for SAP FICO interview questions." }\r
  ];\r
  const t = tiers.find(x => pct <= x.max) || tiers[tiers.length - 1];\r
\r
  root.innerHTML = \`\r
    <div class="result-card">\r
      <div class="result-emoji">\${t.emoji}</div>\r
      <div class="result-score-lbl">Your final score</div>\r
      <div class="result-score">\${score} / \${pool.length}</div>\r
      <p class="result-msg">\${t.msg}</p>\r
      <div class="stats-grid">\r
        <div class="stat-box"><div class="stat-val green">\${score}</div><div class="stat-lbl">Correct</div></div>\r
        <div class="stat-box"><div class="stat-val red">\${pool.length - score}</div><div class="stat-lbl">Wrong</div></div>\r
        <div class="stat-box"><div class="stat-val">\${pct}%</div><div class="stat-lbl">Accuracy</div></div>\r
      </div>\r
      <button class="restart-btn" onclick="restart()">Play again</button>\r
    </div>\r
  \`;\r
}\r
\r
// Each new game gets a freshly shuffled pool\r
function restart() { renderStart(); }\r
\r
renderStart();\r
<\/script>\r
</body>\r
</html>\r
`,r=e();function i(){let e=new URL(`/assets/nextgen-logo-CgROJ8Ty.png`,``+import.meta.url).href,i=n.replace(`src="next-gen-logo.png"`,`src="${e}"`);return(0,r.jsxs)(t,{children:[(0,r.jsx)(`section`,{className:`bg-gradient-hero py-8 md:py-12`,children:(0,r.jsxs)(`div`,{className:`mx-auto max-w-5xl px-4 text-center`,children:[(0,r.jsx)(`div`,{className:`inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white`,children:`Quiz Experience`}),(0,r.jsx)(`h1`,{className:`mt-4 text-4xl font-black md:text-6xl`,children:`SAP FICO Challenge`}),(0,r.jsx)(`p`,{className:`mx-auto mt-5 max-w-3xl text-lg text-muted-foreground`,children:`The full quiz experience from the provided HTML page has been embedded directly into this route.`})]})}),(0,r.jsx)(`div`,{className:`mx-auto w-full max-w-7xl px-4 py-6 pb-12 md:py-8`,children:(0,r.jsx)(`iframe`,{title:`SAP FICO quiz`,srcDoc:i,className:`min-h-[1400px] w-full rounded-3xl border border-border bg-background shadow-[0_20px_80px_rgba(7,17,38,0.16)]`,sandbox:`allow-scripts allow-same-origin`})})]})}export{i as component};