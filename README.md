# Github Repository 내의 Issue Labels를 추출하고 적용하는 JS 모듈

> 1. **Node 설치 필요**
>   - https://nodejs.org/en
>     
> 2. **프로젝트 폴더 생성**
>   - 폴더 내에서 아래와 같은 명령어 실행
>   - ```npm init -y```
>   - ```npm install axios```
> 
> 3. **각 파일에서 깃헙 토큰, 유저 이름, Repo 이름 설정**
>   - ```get_issue_labels.js``` 과 ```apply_issue_lables.js``` 파일 내부에서 아래와 같은 내용을 채운다.
>   > ```javascript
>   > // GitHub API 토큰 설정 (토큰이 있는 경우)
>   > const GITHUB_TOKEN = 'your_github_token'; // GitHub Personal Access Token
>   > const owner = 'new_repo_owner';           // 레포지토리 소유자 (Organaztion도 가능)
>   > const repo = 'new_repo_name';             // 레포지토리 이름 (Public 이어야함)
>   > ```
> 
> 4. **Repo Issue Labels 추출**
>   - ```node get_issue_labels.js```
>
> 5. **Repo Issue Labels 적용**
>   - ```node apply_issue_lables.js```
>
---
> **추출 & 적용 명령어 실행시 ```labels.json``` 파일 내용으로 전달 및 저장됨**
> 
> **같은 내용으로 적용하면 Label이 중복될 수 있음**
