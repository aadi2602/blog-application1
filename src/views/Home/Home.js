import './Home.css'
import blogs from './../../data'
import BlogCard from './../../component/BlogCard/BlogCard'

function Home() {

    console.log(blogs);
  return (
    <>
    <div className='blogs-container'>
    {
            blogs.map((blogsobject, i)=>{
                const {
                    id,
                    title,
                    content,
                    author,
                    date,
                    categories
                } = blogsobject

                return (
                    <BlogCard
                        key={i}
                        id={id}
                        title={title}
                        content={content}
                        author={author}
                        date={date}
                        categories={categories}
                    />
                )
            })
        }
    </div>
        
    </>
  )
}

export default Home