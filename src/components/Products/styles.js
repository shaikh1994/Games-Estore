import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // backgroundImage: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // backgroundImage: 'linear-gradient(to right top, #65dfc9, #6cdbeb)',
    backgroundImage: 'linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% )',
    // backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
 
}));