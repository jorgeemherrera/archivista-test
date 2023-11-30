'use client'
import SearchBar from "./components/searchBar/searchBar";
import searchIcon from '@/../public/search.png'
import gridIcon from '@/../public/grid.svg'
import columnIcon from '@/../public/list.png'
import CardList from "./components/CardList";
import data from '@/app/api/data.json'
import DataTable from "./components/RecordList";
import { useState } from "react";
import { Container } from "@mui/material";
import { formatDate } from "./utils/dateUtils";
import './page.scss'

export default function Home() {
  const [view, setView] = useState('list');
  const [filteredData, setFilteredData] = useState(data);

  const changeView = (newView: string) => {
    setView(newView);
  };

  const handleSearch = (query: any) => {
    const filtered = data.records.filter((item) => {
      const dateFormated = formatDate(item.createdAt)
      const titleMatches = item.metadata.title.toLowerCase().includes(query.toLowerCase());
      const createdAtMatches = dateFormated.toLowerCase().includes(query.toLowerCase());
      const statusMatches = item.status.toLowerCase().includes(query.toLowerCase());

      return titleMatches || createdAtMatches || statusMatches;
    });

    setFilteredData({ records: filtered });
  };

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
        onChangeView={changeView}
        onSearch={handleSearch}
      />
      {/* <MoreDetails
        image={imageContent}
        status="certified"
        description="The core values of the Elinor & T.W. Miller Foundation are deeply rooted in the histories and legacies of the Miller, Myers, and Estes families. Beyond their commitment to education and athleticism, one core value shines as a guiding light in their philanthropic journey: Spiritual Health. This profound commitment to spiritual well-being reflects the family's strong connection to their faith and their unwavering dedication to uplifting communities through their generosity.\n\n Elinor & T.W. Miller Foundation"
        title="Nurturing Spiritual Health: The Guiding Light of the Elinor & T.W. Miller Foundation"
        content="content"
      /> */}


      <Container className="container-data">
        {view === 'cards' ? (
          <CardList
            data={filteredData}
          />
        ) : (
          <DataTable data={filteredData} />
        )}
      </Container>



    </main>
  )
}