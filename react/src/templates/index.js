import React from 'react'
import { connect } from "react-redux"
import Header from './parts/Header/'
import Footer from './parts/Footer/'

// DECORATOR
// ES: https://benmccormick.org/2019/02/11/reusable-react

const withTemplate = WrappedComponent => {
   class ComponentWithCounter extends React.Component {
     componentDidMount() {
       // porto in alto lo scroll ad ogni cambio pagina
       window.scrollTo(0, 0);
     }
     render() {
         return (
           <React.Fragment>
             <Header />
             <main className="container">
               <WrappedComponent {...this.props} {...this.callbacks} />
               </main>
             <Footer />
           </React.Fragment>
         )
     }
  }
  const mapStateToProps = (state) => {
    const { cart, user } = state
    return {
      cart, user
    }
  }
  return connect(mapStateToProps)( ComponentWithCounter );

};

export default withTemplate
