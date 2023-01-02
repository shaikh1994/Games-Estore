import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() =>({
    root: {
        maxWidth: '100%',
        background: 'linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))',       
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",

        backdropFilter: 'blur(2rem)',
        // if mobile view is blurry then comment backdropFilter.

  
        '-webkitBackdropFilter': "blur(8.5px)",
        // "-webkitTextFillColor": "transparent",
        // "-webkitBackgroundClip": "text",
        borderRadius: "10px",
        textTransform: "uppercase",
        
    },
    media: {
        // height: 0,
        paddingTop: '56.25%', // 16:9
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        borderRadius: "10px 10px 0 0 ",
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'space-evenly',
        
      },
      cursor:{
        cursor: 'url("https://img.icons8.com/fluency/48/null/homer-simpson.png"), default',
      },
      cardContent: {
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        // textAlign: 'center',
        // justify:"center",
        fontSize: '1em',
        // fontWeight: 'bolder',
        paddingBottom: '10px',
      },
      buttons:{
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingTop: '20px',
      },

      button: {
        background: "rgba(255, 255, 255, 0.15)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        border: 'none',
        color: 'black',
        padding: '5px 20px',
        textAlign: 'center',
        textDecoration: 'none',       
        borderRadius: '0px 0px 10px 10px ',
        fontSize: '.7em',
        
      },

      // button: {
      //   display: 'flex',
      //   justifyContent: 'space-evenly',
      //   flexDirection: 'row',
      //   backgroundColor: '#ddd',
      //   border: 'none',
      //   color: 'black',
      //   padding: '5px 10px',
      //   textAlign: 'center',
      //   textDecoration: 'none',
      //   display: 'inline-block',
      //   margin: '4px 2px',
      //   cursor: 'pointer',
      //   borderRadius: '16px',
      //   fontSize: '.7em'
      // },

}))