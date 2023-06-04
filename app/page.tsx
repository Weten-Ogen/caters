import NewsGrid from '@/components/local/NewsGrid';
import { NewsArticle, NewsResponse } from '@/models/NewsArticles';




export async function page():Promise<NewsArticle> {
  await new Promise(r => setTimeout(r,6000));
  const response =  await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.Api_Key);

  const newResponse:NewsResponse = await response.json();

  const newArticles:NewsArticle[] =  newResponse.articles;
  
  
  return (
    <div className='mx-6 my-4'>
      <h1 className='uppercase text-3xl pb-4 text-red-600'>breaking news</h1>
      <NewsGrid data={newArticles}/>
    </div>
  )
}

export default page;