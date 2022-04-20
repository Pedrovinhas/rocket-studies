import GlobalStyle from './styles/global'
import { Header } from './components/Header'
import { MenuSection } from './components/Section/Menu'
import { PostSection } from './components/Section/Posts'
import { BlogSection } from './components/Section/Blog'



export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MenuSection />
      <PostSection />
      <BlogSection />
    </>
  )
}