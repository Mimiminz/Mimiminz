import { writeFileSync } from 'node:fs';
import Parser from 'rss-parser';

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Sriracha&weight=400&size=60&duration=5001&pause=1000&color=6A5ACD&center=true&vCenter=true&width=900&height=300&lines=Hello+World!+I'm+Minz+👀;)](https://git.io/typing-svg)



<summary>😎 <b>developers/Mimiminz</b></summary>



#### 📊 Recent My Activity..
<hr/>

[![Mimiminz's github activity graph](https://github-readme-activity-graph.vercel.app/graph?username=Mimiminz&bg_color=020715&color=8A2BE2&line=8A2BE2&point=8977ad&area=true&hide_border=true)](https://github.com/ashutosh00710/github-readme-activity-graph)

<div align="center">

[![Mimiminz's GitHub stats](https://github-readme-stats.vercel.app/api?username=Mimiminz&show_icons=true&bg_color=020715&title_color=8A2BE2&icon_color=928AFA&text_color=fdfdfd&rank_icon=github&hide_border=true&text_bold=false)](https://github.com/Mimiminz/github-readme-stats)
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=Mimiminz&layout=compact&hide_border=true&bg_color=020715&card_width=350&text_color=E6E5FA&title_color=6A5ACD&langs_count=8)

</div>

<hr/>
<br/>  
<div align="center">
<img src="https://komarev.com/ghpvc/?username=Mimiminz&&style=flat-square&color=8A2BE2"/>
</div>  
  
<br/>  

## 📕 Latest Blog Posts

`;

// rss-parser 생성
const parser = new Parser({
  headers: {
    Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
  },
});

(async () => {
  // 피드 목록
  const feed = await parser.parseURL('https://ciaom.tistory.com/rss'); // 본인의 블로그 주소

  text += `<ul>`;

  // 최신 5개의 글의 제목과 링크를 가져온 후 text에 추가
  const postCount = Math.min(feed.items.length, 5);
  for (let i = 0; i < postCount; i++) {
    const { title, link } = feed.items[i];
    console.log(`${i + 1}번째 게시물`);
    console.log(`추가될 제목: ${title}`);
    console.log(`추가될 링크: ${link}`);
    text += `<li><a href='${link}' target='_blank'>${title}</a></li>`;
  }

  text += `</ul>`;

  // README.md 파일 생성
  writeFileSync('README.md', text, 'utf8', (e) => {
    console.log(e);
  });
  console.log('업데이트 완료');
})();
