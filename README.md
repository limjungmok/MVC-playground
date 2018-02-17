# Hacker News

## Goal

- [Hacker News](https://news.ycombinator.com/)와 (꽤) 똑같은 UI 화면을 만드는 것이 이번 과제입니다.
- [Hacker News stories API 문서](https://github.com/HackerNews/API#new-top-and-best-stories)를 참고하여 `topstories`, `newstories`, 혹은 `beststories`중 하나를 선택하여 해당 카테고리의 아이템 30개를 화면에 보여주도록 UI를 만들어주세요.
- 각각의 아이템을 클릭했을 경우, 해당 아이템의 링크로 이동해야 합니다. (Hacker News 사이트 UX와 동일)
- 각각의 아이템은, 해당 아이템의 타이틀, 작성자 이름을 보여주어야 합니다. 그 이외의 정보는 신경쓰지 않으셔도 됩니다.
- CSS는 자유 입니다.
- [Hacker News API](https://github.com/HackerNews/API#new-top-and-best-stories)로 GET 요청을 보내면 그에 대한 응답으로 아이템 id값들이 담긴 배열이 돌아옵니다. 각각의 아이템 id를 이용해 [Hacker News items API 문서](https://github.com/HackerNews/API#items)를 참고하여 각각의 아이템 상세 정보를 가져와야 합니다. 각각의 아이템 상세정보에 담긴 `title`과 `url`, 그리고 `by`(작성자) 정보를 이용하여 글 목록을 만들어 주세요.

---

### 도움말

- [이벤트 걸기](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener)
- [이벤트 종류](https://developer.mozilla.org/ko/docs/Web/Reference/Events)
- [Element 만들기](https://developer.mozilla.org/ko/docs/Web/API/Document/createElement)
- [여러개의 Element 찾기](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [하나의 Element 찾기](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector)
- [Element HTML 수정](https://developer.mozilla.org/ko/docs/Web/API/Element/innerHTML)
- [Element 텍스트 변경](https://developer.mozilla.org/ko/docs/Web/API/Node/textContent)
- [Element 뒤로 추가](https://developer.mozilla.org/ko/docs/Web/API/Node/appendChild)
- [Element 앞에 추가](https://developer.mozilla.org/ko/docs/Web/API/Node/insertBefore)
- [Document API](https://developer.mozilla.org/ko/docs/Web/API/Document)
- [Element API](https://developer.mozilla.org/ko/docs/Web/API/Element)
- [Node API](https://developer.mozilla.org/ko/docs/Web/API/Node)

---

### Installation

- 우선 repository를 본인 Github 계정으로 fork해주세요. (바닐라코딩 repository 페이지 오른쪽 상단에 보시면 fork 버튼이 있습니다.)

```
// ** 본인이 원하는 디렉토리내에서 실행할 것. **

// fork해온 프로젝트를 본인 컴퓨터에 다운받는 명령어
git clone REMOTE_URL

// 방금 clone한 디렉토리로 이동
cd hacker-news

// 작업에 필요한 구성 요소 설치
npm install
```

---

### 쉽게 작업하는 법

```
// 프로젝트 디렉토리로 이동 후, 아래의 명령어를 실행시켜 보세요.
// 브라우저에 자동으로 작업하는 페이지가 열리고,
// 작업을 하시면서 변동 사항을 저장하시면 자동으로 브라우저는 변화를 감지하고 새로운 화면을 보여줍니다.
npm start

// 작업 끝내기
MAC/Window: control + C
```

---

### 작업 내용 저장하는 법

```
// 프로젝트 디렉토리에서 아래의 명령어를 순서대로 실행한다.
git status
git add FILE_NAME
git commit -m "COMMIT_MSG"
git push origin master
```

---

### 작업 내용 Ken과 공유하는 법

작업 내용 저장 후, 다음 링크의 방법을 따라하세요.[PR 만들기](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)

**영어 잘 이해 안되시면 슬랙 채널에 물어보세요!**

---

### 주의

- `src` 디렉토리내에서만 작업해주세요.
