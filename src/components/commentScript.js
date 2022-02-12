export default function setCommentScript() {
  const commentScript = document.createElement('script');
  // const theme = typeof window !== 'undefined' && localStorage.getItem(Theme) === DarkTheme ? 'github-dark' : 'github-light';
  commentScript.async = true;
  commentScript.src = 'https://utteranc.es/client.js';
  commentScript.setAttribute('repo', process.env.commentBlog);
  commentScript.setAttribute('issue-term', 'pathname');
  commentScript.setAttribute('id', 'utterances');
  commentScript.setAttribute('theme', 'github-light');
  commentScript.setAttribute('crossorigin', 'anonymous');

  return commentScript;
}
