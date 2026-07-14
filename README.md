# hakon HR

## 처음 설정 (최초 1회)

VSCode에서 이 폴더를 열고 터미널(``Ctrl+` ``)에서:

```bash
npm install
```

## 개발 중 (실시간 반영)

```bash
npm run dev
```

`src/global.css`나 `tailwind.config.js`, `index.html`의 클래스를 수정할 때마다 `dist/global.css`가 자동으로 다시 빌드됩니다. `index.html`을 브라우저(또는 VSCode의 Live Server 확장)로 열어서 확인하세요.

## 배포 전 (최종 빌드)

```bash
npm run build
```

사용하지 않는 클래스가 제거되고 minify된 최종 `dist/global.css`가 생성됩니다. 배포 시에는 이 명령을 반드시 한 번 실행한 뒤,

- `index.html`
- `dist/global.css`

이 두 파일(과 필요한 이미지/리소스)만 서버에 올리면 됩니다. `src/`, `tailwind.config.js`, `node_modules/`, `package.json`은 배포 서버에 올릴 필요 없습니다.

## VSCode에서 빠르게 빌드하기

`Cmd/Ctrl + Shift + B` → "Tailwind: Build (배포용)" 선택하면 터미널 없이 바로 빌드됩니다.
(`.vscode/tasks.json`에 등록되어 있어요.)

## 권장 확장 프로그램

이 폴더를 열면 VSCode가 자동으로 추천합니다:
- **Tailwind CSS IntelliSense** (bradlc.vscode-tailwindcss) — 클래스 자동완성
- **Prettier** — 코드 포맷팅
