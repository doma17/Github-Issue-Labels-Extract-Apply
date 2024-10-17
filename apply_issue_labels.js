const axios = require('axios');
const fs = require('fs');

// GitHub API 토큰 설정 (토큰이 있는 경우)
const GITHUB_TOKEN = ''; // GitHub Personal Access Token
const owner = ''; // 새로운 레포지토리 소유자
const repo = '';   // 새로운 레포지토리 이름

// 라벨을 추가하는 함수
async function createLabel(label) {
  try {
    const response = await axios.post(`https://api.github.com/repos/${owner}/${repo}/labels`, label, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json'
      }
    });
    console.log(`Label '${label.name}' created successfully.`);
  } catch (error) {
    if (error.response && error.response.status === 422) {
      console.log(`Label '${label.name}' already exists or invalid data.`);
    } else {
      console.error(`Error creating label '${label.name}':`, error.message);
    }
  }
}

// labels.json 파일을 읽고, 라벨을 새 레포지토리에 추가하는 함수
async function applyLabels() {
  try {
    const labelsData = fs.readFileSync('labels.json', 'utf-8');
    const labels = JSON.parse(labelsData);

    for (const label of labels) {
      await createLabel(label);
    }

    console.log('All labels have been applied successfully.');
  } catch (error) {
    console.error('Error applying labels:', error.message);
  }
}

applyLabels();
