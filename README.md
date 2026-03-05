# EL 영어교육 웹사이트 (EL Education)

EL 영어교육 메인 페이지 클론 프로젝트

## 📁 프로젝트 구조

```
EL/
├── index.html                 # 메인 HTML (섹션별 주석으로 구분)
├── README.md                  # 이 파일
│
├── css/
│   ├── variables.css          # 🎨 디자인 토큰 (색상, 폰트, 간격, 그림자 등)
│   ├── reset.css              # 브라우저 초기화
│   ├── layout.css             # 컨테이너, 섹션, 공용 버튼
│   ├── header.css             # 헤더, 네비게이션, 드롭다운
│   ├── hero.css               # 히어로 슬라이더
│   ├── sections.css           # 각 섹션별 레이아웃 (매거진, 레벨테스트, 등)
│   ├── cards.css              # 카드 컴포넌트 (매거진, Why, 모바일러닝, 뉴스 등)
│   ├── footer.css             # 푸터
│   ├── components.css         # 팝업, Back to Top 등 UI 컴포넌트
│   ├── animations.css         # 스크롤 애니메이션 클래스
│   └── responsive.css         # 반응형 브레이크포인트 (1024px, 640px)
│
├── js/
│   ├── popup.js               # 팝업 열기/닫기 + 오늘 하루 보지 않기
│   ├── header.js              # 헤더 스크롤 상태 + 모바일 메뉴 토글
│   ├── hero-slider.js         # 히어로 슬라이더 (자동재생, 터치, 도트)
│   ├── scroll-animations.js   # IntersectionObserver 기반 스크롤 애니메이션
│   └── back-to-top.js         # 맨 위로 버튼
│
└── assets/
    └── images/                # 이미지 에셋 (추후 추가)
```

## 🔧 수정 가이드

### 색상/테마 변경
→ `css/variables.css`의 CSS 변수만 수정하면 전체 테마가 변경됩니다.

### 새로운 섹션 추가
1. `index.html`에 섹션 HTML 추가
2. 레이아웃은 `css/sections.css`에 추가
3. 카드 컴포넌트가 있다면 `css/cards.css`에 추가

### 새로운 페이지 추가
1. `index.html`을 복사하여 새 HTML 파일 생성
2. 동일한 CSS/JS 파일을 참조
3. 해당 페이지에만 필요한 CSS는 별도 파일로 생성

### 반응형 수정
→ `css/responsive.css`에서 브레이크포인트별 스타일 조정

### 애니메이션 추가
→ `css/animations.css`에 새 클래스 정의, HTML에 클래스 추가하면 `scroll-animations.js`가 자동 감지

## 🚀 실행 방법

정적 파일이므로 아무 웹서버로 실행 가능합니다:

```bash
# Python
python3 -m http.server 8080

# Node.js (npx)
npx serve .

# VS Code
# Live Server 확장 설치 후 index.html 우클릭 → Open with Live Server
```

## 📐 디자인 시스템

| 토큰 | 값 | 용도 |
|------|-----|------|
| `--color-primary` | `#1a3a6e` | 메인 브랜드 색상 |
| `--color-accent` | `#f5a623` | 강조 색상 |
| `--radius-md` | `12px` | 기본 둥근 모서리 |
| `--shadow-md` | `0 4px 20px rgba(0,0,0,0.08)` | 기본 그림자 |
| `--font-body` | `Noto Sans KR` | 본문 폰트 |
| `--font-heading` | `Poppins` | 영문 헤딩 폰트 |
