import React from "react";
import Footer from "./Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import OffcanvasNavBar from "./OffcanvasNavBar";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
export default function MyGallery() {
   const classes = useStyles();

 return(
     <>
     <OffcanvasNavBar/> 
     <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs>
           <div className="card mx-auto my-5" style={{width: "18rem"}}>
               <img src="https://cdn.pixabay.com/photo/2016/09/05/21/37/cat-1647775_960_720.jpg" className="card-img-top" alt="..." height="200px"/>
               <div className="card-body">
                  <h5 className="card-title text-black text-center text-uppercase">➤  hd images </h5>
                  <p className="card-text text-center text-capitalize">category: animals</p>
                  <div className="text-center"><a href="https://pixabay.com/images/download/cat-1647775.jpg?attachment" className="btn btn-primary text-uppercase">download</a></div>
               </div>
           </div>
        </Grid>
        <Grid item xs>
           <div className="card mx-auto my-5" style={{width: "18rem"}}>
               <img src="https://cdn.pixabay.com/photo/2018/05/03/22/34/lion-3372720_960_720.jpg" className="card-img-top" alt="..." height="200px"/>
               <div className="card-body">
                  <h5 className="card-title text-black text-center text-uppercase">➤  hd images </h5>
                  <p className="card-text text-center text-capitalize">category: animals</p>
                  <div className="text-center"><a href="https://pixabay.com/images/download/lion-3372720.jpg?attachment" className="btn btn-primary text-uppercase">download</a></div>
               </div>
           </div>
        </Grid>
        <Grid item xs>
           <div className="card mx-auto my-5" style={{width: "18rem"}}>
               <img src="https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194_960_720.jpg" className="card-img-top" alt="..." height="200px"/>
               <div className="card-body">
                  <h5 className="card-title text-black text-center text-uppercase">➤  hd images </h5>
                  <p className="card-text text-center text-capitalize">category: birds</p>
                  <div className="text-center"><a href="https://pixabay.com/images/download/parrot-3601194.jpg?attachment" className="btn btn-primary text-uppercase">download</a></div>
               </div>
           </div>
        </Grid>
        <Grid item xs>
          <div className="card mx-auto my-5" style={{width: "18rem"}}>
               <img src="https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_960_720.jpg" className="card-img-top" alt="..." height="200px"/>
               <div className="card-body">
                  <h5 className="card-title text-black text-center text-uppercase">➤  hd images </h5>
                  <p className="card-text text-center text-capitalize">category: nature</p>
                  <div className="text-center"><a href="https://pixabay.com/images/download/hintersee-3601004.jpg?attachment" className="btn btn-primary text-uppercase">download</a></div>
               </div>
           </div>
        </Grid>
        <Grid item xs>
           <div className="card mx-auto my-5" style={{width: "18rem"}}>
               <img src="https://cdn.pixabay.com/photo/2018/07/29/21/32/flowers-3571119_960_720.jpg" className="card-img-top" alt="..." height="200px"/>
               <div className="card-body">
                  <h5 className="card-title text-black text-center text-uppercase">➤  hd images </h5>
                  <p className="card-text text-center text-capitalize">category: plants</p>
                  <div className="text-center"><a href="https://pixabay.com/images/download/flowers-3571119.jpg?attachment" className="btn btn-primary text-uppercase">download</a></div>
               </div>
           </div>
        </Grid>
        <Grid item xs>
           <div className="card mx-auto my-5" style={{width: "18rem"}}>
               <img src="https://cdn.pixabay.com/photo/2019/06/29/05/42/books-4305459_960_720.jpg" className="card-img-top" alt="..." height="200px"/>
               <div className="card-body">
                  <h5 className="card-title text-black text-center text-uppercase">➤  hd images </h5>
                  <p className="card-text text-center text-capitalize">category: books</p>
                  <div className="text-center"><a href="https://cdn.pixabay.com/photo/2019/06/29/05/42/books-4305459_960_720.jpg" className="btn btn-primary text-uppercase">download</a></div>
               </div>
           </div>
        </Grid>
        <Grid item xs>
           <div className="card mx-auto my-5" style={{width: "18rem"}}>
               <img src="https://cdn.pixabay.com/photo/2018/05/09/01/00/greece-3384386_960_720.jpg" className="card-img-top" alt="..." height="200px"/>
               <div className="card-body">
                  <h5 className="card-title text-black text-center text-uppercase">➤  hd images </h5>
                  <p className="card-text text-center text-capitalize">category: places</p>
                  <div className="text-center"><a href="https://pixabay.com/images/download/greece-3384386.jpg?attachment" className="btn btn-primary text-uppercase">download</a></div>
               </div>
           </div>
        </Grid>
        <Grid item xs>
           <div className="card mx-auto my-5" style={{width: "18rem"}}>
               <img src="https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg" className="card-img-top" alt="..." height="200px"/>
               <div className="card-body">
                  <h5 className="card-title text-black text-center text-uppercase">➤  hd images </h5>
                  <p className="card-text text-center text-capitalize">category: animals</p>
                  <div className="text-center"><a href="https://pixabay.com/images/download/tiger-2535888.jpg?attachment" className="btn btn-primary text-uppercase">download</a></div>
               </div>
           </div>
        </Grid>
      </Grid>
    </div>
    <Footer/>
    <br/>
</>);
}