const axios = require('axios');
const fs = require('fs');

// GitHub API 토큰 설정 (토큰이 있는 경우)
const GITHUB_TOKEN = ''; // GitHub Personal Access Token
const owner = ''; // 예: 'octocat'
const repo = '';   // 예: 'Hello-World'

// GitHub API 요청
async function getLabels() {
  try {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/labels`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json'
      }
    });

    // 라벨 정보에서 name, color, description만 추출
    const labels = response.data.map(label => ({
      name: label.name,
      color: label.color,
      description: label.description
    }));

    // JSON 형식으로 라벨 정보 저장
    const labelsJson = JSON.stringify(labels, null, 2); // 들여쓰기 2칸으로 보기 쉽게 만듦
    fs.writeFileSync('labels.json', labelsJson, 'utf-8');

    console.log('Labels have been saved to labels.json');
  } catch (error) {
    console.error('Error fetching labels:', error.response ? error.response.data : error.message);
  }
}

getLabels();
