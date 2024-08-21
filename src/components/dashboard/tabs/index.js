import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import GridComponent from '../grid';
import "./style.css"
import ListComponent from '../list';

export default function TabsComponent({coins}) {
  const [value, setValue] = React.useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: "600",
    fontFamily: "Inter",
    '& .Mui-selected': { color:'var(--blue)' }
  }

  return (
    <div >
      <TabContext value={value}>

          <TabList onChange={handleChange} variant='fullWidth'
          sx={{
            '& .MuiTabs-indicator': {
              height: '1px !important', // Height of the underline bar
              
            },
          }}>
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style}/>
          </TabList>
        
        <TabPanel value="grid">
            <div className='grid-flex'>
                {coins.map((coin, i)=>{
                    return(
                        <GridComponent coin={coin} key={i}/>
                    )
                })}
            </div>
        </TabPanel>
        <TabPanel value="list">
            <table className='list-table'>
                    {
                      coins.map((coin, i)=>{
                        return(
                          <ListComponent coin={coin} key={i} />
                        )
                      })
                    } 
            </table>
        </TabPanel>

      </TabContext>
    </div>
  );
}

