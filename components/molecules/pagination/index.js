/**
 * Pagination
 */

// React
import React, { Component } from 'react'
import { func, number, string } from 'prop-types'

// Style
import styled, { withTheme } from 'styled-components'

// const LEFT_PAGE = 'LEFT'
// const RIGHT_PAGE = 'RIGHT'

export const Pagination = withTheme(
  class Pagination extends Component {
    constructor (props) {
      super(props)
      const { totalRecords = null, pageLimit = 30, pageNeighbours = 0 } = props

      this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 30
      this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0

      this.pageNeighbours =
        typeof pageNeighbours === 'number' ? Math.max(0, Math.min(pageNeighbours, 2)) : 0

      this.totalPages = Math.ceil(this.totalRecords / this.pageLimit)

      this.state = { currentPage: 1 }
    }

    range = (from, to, step = 1) => {
      let i = from
      const range = []

      while (i <= to) {
        range.push(i)
        i += step
      }

      return range
    }

    static propTypes = {
      activePage: number,
      onPageChange: func.isRequired,
      text: string,
      totalPages: number
    }

    static defaultProps = {
      activePage: 1,
      text: null,
      totalPages: 1
    }

    handlePageClick = active => {
      const { onPageChange, totalPages } = this.props
      onPageChange(active, totalPages)
    }

    render () {
      const { activePage } = this.props

      if (!activePage) {
        return null
      }

      return (
        <StyledPagination aria-label='Pagination'>
          <ul className='pagination'>
            <li className='page-item'>
              <a className='page-link' href='#'>
                Previous
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#'>
                1
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#'>
                2
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#'>
                3
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#'>
                Next
              </a>
            </li>
          </ul>
        </StyledPagination>
      )
    }
  }
)

const StyledPagination = styled.nav``

//   constructor(props) {
//     super(props);
//     const { totalRecords = null, pageLimit = 30, pageNeighbours = 0 } = props;

//     this.pageLimit = typeof pageLimit === "number" ? pageLimit : 30;
//     this.totalRecords = typeof totalRecords === "number" ? totalRecords : 0;

//     this.pageNeighbours =
//       typeof pageNeighbours === "number"
//         ? Math.max(0, Math.min(pageNeighbours, 2))
//         : 0;

//     this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

//     this.state = { currentPage: 1 };
//   }

//   componentDidMount() {
//     this.gotoPage(1);
//   }

//   gotoPage = page => {
//     const { onPageChanged = f => f } = this.props;

//     const currentPage = Math.max(0, Math.min(page, this.totalPages));

//     const paginationData = {
//       currentPage,
//       totalPages: this.totalPages,
//       pageLimit: this.pageLimit,
//       totalRecords: this.totalRecords
//     };

//     this.setState({ currentPage }, () => onPageChanged(paginationData));
//   };

//   handleClick = (page, evt) => {
//     evt.preventDefault();
//     this.gotoPage(page);
//   };

//   handleMoveLeft = evt => {
//     evt.preventDefault();
//     this.gotoPage(this.state.currentPage - this.pageNeighbours * 2 - 1);
//   };

//   handleMoveRight = evt => {
//     evt.preventDefault();
//     this.gotoPage(this.state.currentPage + this.pageNeighbours * 2 + 1);
//   };

//   fetchPageNumbers = () => {
//     const totalPages = this.totalPages;
//     const currentPage = this.state.currentPage;
//     const pageNeighbours = this.pageNeighbours;

//     const totalNumbers = this.pageNeighbours * 2 + 3;
//     const totalBlocks = totalNumbers + 2;

//     if (totalPages > totalBlocks) {
//       let pages = [];

//       const leftBound = currentPage - pageNeighbours;
//       const rightBound = currentPage + pageNeighbours;
//       const beforeLastPage = totalPages - 1;

//       const startPage = leftBound > 2 ? leftBound : 2;
//       const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

//       pages = range(startPage, endPage);

//       const pagesCount = pages.length;
//       const singleSpillOffset = totalNumbers - pagesCount - 1;

//       const leftSpill = startPage > 2;
//       const rightSpill = endPage < beforeLastPage;

//       const leftSpillPage = LEFT_PAGE;
//       const rightSpillPage = RIGHT_PAGE;

//       if (leftSpill && !rightSpill) {
//         const extraPages = range(startPage - singleSpillOffset, startPage - 1);
//         pages = [leftSpillPage, ...extraPages, ...pages];
//       } else if (!leftSpill && rightSpill) {
//         const extraPages = range(endPage + 1, endPage + singleSpillOffset);
//         pages = [...pages, ...extraPages, rightSpillPage];
//       } else if (leftSpill && rightSpill) {
//         pages = [leftSpillPage, ...pages, rightSpillPage];
//       }

//       return [1, ...pages, totalPages];
//     }

//     return range(1, totalPages);
//   };

//   render() {
//     if (!this.totalRecords) return null;

//     if (this.totalPages === 1) return null;

//     const { currentPage } = this.state;
//     const pages = this.fetchPageNumbers();

//     return (
//       <>
//         <nav aria-label="Countries Pagination">
//           <ul className="pagination">
//             {pages.map((page, index) => {
//               if (page === LEFT_PAGE)
//                 return (
//                   <li key={index} className="page-item">
//                     <a
//                       className="page-link"
//                       href="#"
//                       aria-label="Previous"
//                       onClick={this.handleMoveLeft}
//                     >
//                       <span aria-hidden="true">&laquo;</span>
//                       <span className="sr-only">Previous</span>
//                     </a>
//                   </li>
//                 );

//               if (page === RIGHT_PAGE)
//                 return (
//                   <li key={index} className="page-item">
//                     <a
//                       className="page-link"
//                       href="#"
//                       aria-label="Next"
//                       onClick={this.handleMoveRight}
//                     >
//                       <span aria-hidden="true">&raquo;</span>
//                       <span className="sr-only">Next</span>
//                     </a>
//                   </li>
//                 );

//               return (
//                 <li
//                   key={index}
//                   className={`page-item${
//                     currentPage === page ? " active" : ""
//                   }`}
//                 >
//                   <a
//                     className="page-link"
//                     href="#"
//                     onClick={e => this.handleClick(page, e)}
//                   >
//                     {page}
//                   </a>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </>
//     );
//   }
// }

// Pagination.propTypes = {
//   totalRecords: PropTypes.number.isRequired,
//   pageLimit: PropTypes.number,
//   pageNeighbours: PropTypes.number,
//   onPageChanged: PropTypes.func
// };
