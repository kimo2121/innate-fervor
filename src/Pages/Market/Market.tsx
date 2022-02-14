import React, { useState } from "react";
import "./styles.css";
import Popup from "../../components/Popup/Popup";
import panel from "../../assets/panel.png";
import { ReactComponent as Magnifier } from "../../assets/magnifier.svg";
import MarketCard from "../../components/MarketCard/MarketCard";
import SideFilter from "../../components/SideFilter/SideFilter";
import BasicModal from "../../components/Modal/Modal";
import ReactPaginate from "react-paginate";
import productsData from "./data";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
interface traitsTypes {
  Data: {
    price: string;
    id: string;
    img: string;
    name: string;
  }[];
}

const Market = () => {
  const [users, setUsers] = useState(productsData);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 8;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return <BasicModal navbar={false} />;
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };
  return (
    <div className="market">
      <SideFilter />
      <div className="right-slider">
        <div className="frame-container">{displayUsers}</div>
        <ReactPaginate
          previousLabel={
            <AiOutlineArrowLeft
              color="#ffb657"
              className="pagination pagination-left"
            />
          }
          nextLabel={
            <AiOutlineArrowRight
              color="#ffb657"
              className="pagination pagination-right"
            />
          }
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
};

export default Market;
