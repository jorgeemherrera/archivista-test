import SearchBar from "./components/searchBar/searchBar";
import searchIcon from '@/../public/search.png'
import gridIcon from '@/../public/grid.svg'
import columnIcon from '@/../public/list.png'
import MoreDetails from "./components/moreDetails";
import imageContent from '@/../public/Rectangle 208.png';
import './page.scss'
import CardList from "./components/CardList";
import  data from '@/app/api/data.json'

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
       {/* <MoreDetails
        image={imageContent}
        status="certified"
        description="The core values of the Elinor & T.W. Miller Foundation are deeply rooted in the histories and legacies of the Miller, Myers, and Estes families. Beyond their commitment to education and athleticism, one core value shines as a guiding light in their philanthropic journey: Spiritual Health. This profound commitment to spiritual well-being reflects the family's strong connection to their faith and their unwavering dedication to uplifting communities through their generosity.\n\n Elinor & T.W. Miller Foundation"
        title="Nurturing Spiritual Health: The Guiding Light of the Elinor & T.W. Miller Foundation"
        content="content"
      /> */}
      <CardList
        data={data}
      />
    </main>
  )
}