import Feed from '@/components/feedUI/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & share
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center">
                The Surinder Singh Application
            </span>
        </h1>
        <p className="desc text-center">
            This is my current ongoing project.
        </p>
        <Feed />
    </section>
  )
}

export default Home