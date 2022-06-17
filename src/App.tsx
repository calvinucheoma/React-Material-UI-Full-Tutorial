import './App.css';
import { createTheme, colors, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/lab'
// import MuiLoadingButton from './components/MuiLoadingButton';
import AdapterDateFns from '@mui/lab/AdapterDateFns'
// import MuiDialog from './components/MuiDialog';
// import MuiAlert from './components/MuiAlert';
// import MuiAvatar from './components/MuiAvatar';
// import MuiBadge from './components/MuiBadge';
// import MuiBottomNavigation from './components/MuiBottomNavigation';
// import MuiBreadcrumbs from './components/MuiBreadcrumbs';
// import MuiChip from './components/MuiChip';
// import MuiDrawer from './components/MuiDrawer';
// import MuiList from './components/MuiList';
// import MuiLinks from './components/MuiLinks';
import MuiNavbar from './components/MuiNavbar';
import MuiDateRangePicker from './components/MuiDateRangePicker';
import MuiResponsiveness from './components/MuiResponsiveness';
// import MuiTimeline from './components/MuiTimeline';
// import MuiMasonry from './components/MuiMasonry';
// import MuiTabs from './components/MuiTabs';
// import MuiDateTimePicker fro./components/MuiDateTimePickerePicker';
// import MuiSkeleton from './components/MuiSkeleton';
// import MuiProgress from './components/MuiProgress';
// import MuiSnackbar from './components/MuiSnackbar';
// import MuiTable from './components/MuiTable';
// import MuiToolTip from './components/MuiToolTip';
// import MuiImageList from './components/MuiImageList';
// import MuiAccordion from './components/MuiAccordion';
// import MuiCard from './components/MuiCard';
// import MuiLayout from './components/MuiLayout';
// import MuiAutocomplete from './components/MuiAutocomplete';
// import MuiRatings from './components/MuiRatings';
// import MuiSwitch from './components/MuiSwitch';
// import MuiCheckBox from './components/MuiCheckBox';
// import MuiRadioButton from './components/MuiRadioButton';
// import MuiSelect from './components/MuiSelect';
// import MuiButton from './components/MuiButton';
// import MuiTypography from './components/MuiTypography';
// import MuiTextField from './components/MuiTextField';
// import MuiSpeedDial from './components/MuiSpeedDial';

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    secondary: {
       main: colors.orange[500]
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
})

function App() {

  return (

  <ThemeProvider theme={theme}> 

  <LocalizationProvider dateAdapter={AdapterDateFns}>

    <div>

      {/* <MuiTypography/> */}
      {/* <MuiButton/> */}
      {/* <MuiTextField/> */}
      {/* <MuiSelect/> */}
      {/* <MuiRadioButton/> */}
      {/* <MuiCheckBox/> */}
      {/* <MuiSwitch/> */}
      {/* <MuiRatings/> */}
      {/* <MuiAutocomplete/> */}
      {/* <MuiLayout/> */}
      {/* <MuiCard/> */}
      {/* <MuiAccordion/> */}
      {/* <MuiImageList/> */}
      <MuiNavbar/>
      {/* <MuiLinks/> */}
      {/* <MuiBreadcrumbs/> */}
      {/* <MuiDrawer/> */}
      {/* <MuiSpeedDial/> */}
      {/* <MuiBottomNavigation/> */}
      {/* <MuiAvatar/> */}
      {/* <MuiBadge/> */}
      {/* <MuiList/> */}
      {/* <MuiChip/> */}
      {/* <MuiToolTip/> */}
      {/* <MuiTable/> */}
      {/* <MuiAlert/> */}
      {/* <MuiSnackbar/> */}
      {/* <MuiDialog/> */}
      {/* <MuiProgress/> */}
      {/* <MuiSkeleton/> */}
      {/* <MuiLoadingButton/> */}
      {/* <MuiDateTimePicker /> */}
      <MuiDateRangePicker/>
      {/* <MuiTabs/> */}
      {/* <MuiTimeline/> */}
      {/* <MuiMasonry /> */}
      <MuiResponsiveness/>

    </div>

  </LocalizationProvider>
  </ThemeProvider> 

  );

};

export default App;
