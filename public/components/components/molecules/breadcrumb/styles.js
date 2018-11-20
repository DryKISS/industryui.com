import css from 'styled-jsx/css'

// @see https://getbootstrap.com/docs/4.0/components/breadcrumb/
// @see https://github.com/twbs/bootstrap/blob/v4-dev/scss/_breadcrumb.scss
// adellesans-regular,"Helvetica Neue",Helvetica,Arial,sans-serif
export default css`
  .Breadcrumb {
    background-color: rgba(62, 62, 62, 0.5);
    border-bottom: 1px #ddd solid;
    border-radius: 0;
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 1rem;
    padding: .75rem 1rem;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .Breadcrumb--active {
    color: #6c757d;
  }

  .Breadcrumb-item {
    display:inline;
    color: #fff;
    font-size: 1rem;
  }

  .Breadcrumb-item:not(:first-child):before {
    color: #ccc;
    content: "/";
    display: inline-block;
    padding-left: .5rem;
    padding-right: .5rem;
  }

  .Breadcrumb-link {
    color: #fff;
  }

  .Breadcrumb-link:hover {
    color: #00ccbc;
  }
  `
