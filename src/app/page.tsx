import SearchBar from "./components/searchBar/searchBar";
import searchIcon from '@/../public/search.png'
import gridIcon from '@/../public/grid.svg'
import columnIcon from '@/../public/list.png'
import './page.scss'

export default function Home() {
  return (
    <main className="main-records">
      <SearchBar
        title="Records"
        icon={searchIcon}
        alt="Icon search bar"
        width={20}
        height={20}
        iconGrid={gridIcon}
        iconColumn={columnIcon}
      />
    </main>
  )
}