import Btn from '../Btn/Btn'
import './PageNave.css'
const PageNav = (props) => {
  return (
    <section className='page-section'>
      <Btn
        className='btn secondary'
        page={props.page}
        funcion={() => {
          props.setPage(props.page - 1)
        }}
        text={props.page === 1 || props.page <= 1 ? 1 : props.page - 1}
      />
      <p>Page: {props.page <= 1 ? 1 : props.page}</p>
      <Btn
        className='btn primary'
        page={props.page}
        funcion={() => {
          props.setPage(props.page + 1)
        }}
        text={props.page + 1 < 2 ? 2 : props.page + 1}
      />
    </section>
  )
}
export default PageNav
