import React, {useEffect} from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css'

import { Navbar, Pie, Sidebar, Stacked } from './components';
import { Area, Bar, Calendar, ColorMapping, ColorPicker, Customers, Ecommerce, Editor, Employees, Financial, Kanban, Line, Orders, Pyramid } from './pages';
import { useStateContext } from './contexts/ContextProvider';



const App = () => {
  // hook:-
  const {activeMenu} = useStateContext();
  // const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed bottom-4 right-4" style={{zIndex:'1000'}}> 
            <TooltipComponent 
            //  id="tooltip"
             content="Settings" position='TopCenter'>
              <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background: 'orange',borderRadius: '50%'}} >
                <FiSettings/>
              </button>
            </TooltipComponent>       
          </div>

          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ): (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )
        }
          <div className= {
            `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'mid:ml-72' : 'flex-2'}`}>

              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full h-10">
                <Navbar/>
              </div>
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce/>} />
                <Route path="/eccomerce" element={<Ecommerce/>} />

                {/* Pages */}
                <Route path='/order' element={<Orders/>}/>
                <Route path='/employees' element={<Employees/>}/>
                <Route path='/customers' element={<Customers/>}/>

                {/* Apps */}
                <Route path='/kanban' element={<Kanban/>}/>
                <Route path='/editor' element={<Editor/>}/>
                <Route path='/calender' element={<Calendar/>}/>
                <Route path='/color-picker' element={<ColorPicker/>}/>
              
              {/* Charts */}
                <Route path='/line' element={<Line/>}/>
                <Route path='/area' element={<Area/>}/>
                <Route path='/bar' element={<Bar/>}/>
                <Route path='/pie' element={<Pie/>}/>
                <Route path='/financial' element={<Financial/>}/>
                <Route path='/color-mapping' element={<ColorMapping/>}/>
                <Route path='/pyramid' element={<Pyramid/>}/>
                <Route path='/stacked' element={<Stacked/>}/>

              </Routes>

          </div>

        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
