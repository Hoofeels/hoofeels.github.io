# Seunghoo Jeong — 개인 홈페이지 (정적 사이트)

Weebly(`hoofeels.weebly.com`)에서 옮겨온 학술 개인 홈페이지입니다.
순수 HTML/CSS/JS로만 만들어져 **빌드 과정이 없고**, 어떤 정적 호스팅에도 그대로 올라갑니다.
**무료 · 광고 없음 · 본인 소유 · 업체 종속 없음.**

---

## 📁 폴더 구조

```
portfolio-site/
├── index.html          # Home
├── profile.html        # Profile (학력·경력·수상·자격)
├── news.html           # News (초청강연·세미나)
├── publication.html    # Publication (논문 목록)
├── conference.html     # Conference (학술대회 발표)
├── gallery.html        # Gallery (사진)
├── assets/
│   ├── styles.css      # 전체 디자인 (색·폰트·레이아웃)
│   ├── script.js       # 다크모드·메뉴·슬라이드쇼·라이트박스
│   ├── cv_jeong_seunghoo.pdf   # CV 파일
│   └── img/            # 모든 이미지 (29장, Weebly에서 내려받아 보관)
└── README.md
```

> Weebly의 이미지·CV·텍스트는 모두 이 폴더 안으로 복사해 두었으므로, **Weebly가 종료되어도 사이트는 그대로 작동**합니다.

---

## 👀 로컬에서 미리보기

가장 간단: `index.html` 파일을 더블클릭해 브라우저로 엽니다.

또는 (한글 폰트/경로까지 정확히 보려면) 터미널에서:

```powershell
cd C:\Users\USER\projects\portfolio-site
# 파이썬이 있다면
python -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

---

## ✏️ 내용 수정하는 법

모든 페이지는 **그냥 HTML 텍스트**입니다. 코드를 몰라도 글자만 바꾸면 됩니다.

- **새 논문/뉴스 추가** → 해당 `*.html`을 열고, 기존 `<li>…</li>` 한 줄을 복사해 붙여넣고 내용만 교체.
- **사진 교체/추가** → 사진 파일을 `assets/img/`에 넣고, `gallery.html`에서 파일명을 바꾸기.
- **연락처·이메일** → 각 페이지 맨 아래 `<footer>` 부분.
- **색상/폰트 바꾸기** → `assets/styles.css` 맨 위 `:root { --accent: #a82e2e; ... }` 값만 수정.
- **CV 교체** → `assets/cv_jeong_seunghoo.pdf`를 새 파일로 덮어쓰기(파일명 동일하게).

수정 후에는 변경된 파일을 호스팅에 다시 올리면 끝.

---

## 🚀 무료로 공개 배포하기 (3가지 중 택1)

### ① Cloudflare Pages — 추천 (드래그&드롭, 깃 몰라도 됨)
1. <https://dash.cloudflare.com> 가입(무료) → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. 이 `portfolio-site` **폴더 전체를 드래그&드롭** 후 **Deploy**.
3. 끝. `프로젝트이름.pages.dev` 무료 주소가 즉시 발급됩니다. (광고 없음)
4. 수정했을 땐 같은 화면에서 폴더를 다시 업로드.

### ② GitHub Pages
1. GitHub 새 저장소 생성 → 이 폴더 파일들을 업로드(또는 `git push`).
2. 저장소 **Settings → Pages → Branch: main / root** 선택 → Save.
3. `사용자이름.github.io/저장소이름` 주소로 공개됩니다.

### ③ Netlify Drop
1. <https://app.netlify.com/drop> 접속.
2. `portfolio-site` 폴더를 드래그&드롭 → 즉시 `랜덤이름.netlify.app` 발급.

---

## 🌐 내 도메인 연결 (나중에, 선택)

위 3곳 모두 **커스텀 도메인 연결은 무료**입니다(도메인 구입비만 연 1~2만원대).
1. 가비아·Cloudflare·Namecheap 등에서 원하는 주소(예: `seunghoojeong.com`) 구매.
2. 호스팅 대시보드의 **Custom domain** 메뉴에서 도메인 입력 → 안내대로 DNS(CNAME) 설정.
3. HTTPS 인증서는 자동 발급됩니다.

도메인 없이 무료 주소(`*.pages.dev` 등)만 써도 전혀 문제없습니다.

---

## ℹ️ 참고
- 한글 폰트는 **Pretendard**(CDN)를 사용합니다. 인터넷 없이 열어도 시스템 폰트로 자동 대체됩니다.
- 우측 상단 ☀️/🌙 버튼으로 **다크모드** 전환(브라우저에 기억됨).
- 모바일·태블릿 반응형 지원.
- 원본 Weebly 사이트: <https://hoofeels.weebly.com/> (참고용, 종료 예정).
