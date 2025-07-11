import React from 'react'
import { Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  HomeOutlined,
  SettingOutlined,
  AppstoreAddOutlined,
  CheckCircleOutlined,
  ScheduleOutlined,
  BellOutlined,
  ToolOutlined,
  MessageOutlined,
  SwapOutlined,
  TeamOutlined,
  FileTextOutlined,
} from '@ant-design/icons'

const MenuList = ({darkTheme}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (path) => {
    navigate(path);
  };

  // Get selected key based on current location
  const getSelectedKey = () => {
    const path = location.pathname;
    if (path === '/' || path === '/dashboard') return ['dashboard'];
    if (path.startsWith('/setup')) return [path.split('/').pop()];
    if (path.startsWith('/attendance')) return [path.split('/').pop()];
    if (path.startsWith('/clock')) return [path.split('/').pop()];
    if (path.startsWith('/leave')) return [path.split('/').pop()];
    if (path.startsWith('/setting')) return [path.split('/').pop()];
    if (path.startsWith('/shift')) return [path.split('/').pop()];
    if (path.startsWith('/report')) return [path.split('/').pop()];
    return [path.substring(1)];
  };

  return (
    <Menu  
      theme={darkTheme ? 'light' : 'dark'}  
      mode='inline' 
      selectedKeys={getSelectedKey()}
      className='h-[88vh] mt-8 flex flex-col gap-2 text-base relative'
    >
      <Menu.Item key="dashboard" icon={<HomeOutlined />} onClick={() => handleMenuClick('/dashboard')}>
        Dashboard
      </Menu.Item>

      <Menu.SubMenu key="setup" icon={<AppstoreAddOutlined />} title="Setup">
        <Menu.Item key="setup-home" onClick={() => handleMenuClick('/setup')}>Setup</Menu.Item>
        <Menu.Item key="employees" onClick={() => handleMenuClick('/setup/employees')}>Employees</Menu.Item>
        <Menu.Item key="positions" onClick={() => handleMenuClick('/setup/positions')}>Positions</Menu.Item>
        <Menu.Item key="roles" onClick={() => handleMenuClick('/setup/roles')}>Roles</Menu.Item>
        <Menu.Item key="employee-category" onClick={() => handleMenuClick('/setup/employee-category')}>Employee Category</Menu.Item>
        <Menu.Item key="work-condition" onClick={() => handleMenuClick('/setup/work-condition')}>Work Condition</Menu.Item>
        <Menu.Item key="skill" onClick={() => handleMenuClick('/setup/skill')}>Skill</Menu.Item>
        <Menu.Item key="services" onClick={() => handleMenuClick('/setup/services')}>Services</Menu.Item>
        <Menu.Item key="workdaytime" onClick={() => handleMenuClick('/setup/workdaytime')}>Work Day Time</Menu.Item>
        <Menu.Item key="employee-docs" onClick={() => handleMenuClick('/setup/employee-docs')}>Employee-Documents</Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu title="Attendance" key="attendance" icon={<CheckCircleOutlined />}>
        <Menu.Item key="attendance-list" onClick={() => handleMenuClick('/attendance')}>Attendance</Menu.Item>
        <Menu.Item key="all" onClick={() => handleMenuClick('/attendance/all')}>All</Menu.Item>
        <Menu.Item key="checkin-early" onClick={() => handleMenuClick('/attendance/checkin-early')}>Checkin-Early</Menu.Item>
        <Menu.Item key="checkin-late" onClick={() => handleMenuClick('/attendance/checkin-late')}>Checkin-Late</Menu.Item>
        <Menu.Item key="checkout-early" onClick={() => handleMenuClick('/attendance/checkout-early')}>Checkout-Early</Menu.Item>
        <Menu.Item key="checkout-overtime" onClick={() => handleMenuClick('/attendance/checkout-overtime')}>Checkout-Overtime</Menu.Item>
        <Menu.Item key="zone" onClick={() => handleMenuClick('/attendance/zone')}>Attendance-Zone</Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="activities" icon={<ScheduleOutlined />} onClick={() => handleMenuClick('/activities')}>Activities</Menu.Item>

      <Menu.SubMenu title="Clock-In-Out" key="clock" icon={<ScheduleOutlined />}>
        <Menu.Item key="clock-main" onClick={() => handleMenuClick('/clock')}>Clock-In-Out</Menu.Item>
        <Menu.Item key="request" onClick={() => handleMenuClick('/clock/request')}>Request</Menu.Item>
        <Menu.Item key="daily" onClick={() => handleMenuClick('/clock/daily')}>Daily Report</Menu.Item>
        <Menu.Item key="detail" onClick={() => handleMenuClick('/clock/detail')}>Detail Report</Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu title="Leave" key="leave" icon={<SwapOutlined />}>
        <Menu.Item key="leave-main" onClick={() => handleMenuClick('/leave')}>Leave</Menu.Item>
        <Menu.Item key="leave-request" onClick={() => handleMenuClick('/leave/request')}>Request</Menu.Item>
        <Menu.Item key="type" onClick={() => handleMenuClick('/leave/type')}>Type</Menu.Item>
        <Menu.Item key="group" onClick={() => handleMenuClick('/leave/group')}>Type-Group</Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="pushnotification" icon={<BellOutlined />} onClick={() => handleMenuClick('/pushnotification')}>Push Notifications</Menu.Item>

      <Menu.SubMenu title="Setting" key="setting" icon={<SettingOutlined />}>
        <Menu.Item key="setting-main" onClick={() => handleMenuClick('/setting')}>Setting</Menu.Item>
        <Menu.Item key="holidays" onClick={() => handleMenuClick('/setting/holidays')}>Holidays</Menu.Item>
        <Menu.Item key="workdays" onClick={() => handleMenuClick('/setting/workdays')}>Work-Days</Menu.Item>
        <Menu.Item key="card" onClick={() => handleMenuClick('/setting/card')}>Card</Menu.Item>
        <Menu.Item key="users" onClick={() => handleMenuClick('/setting/users')}>Users</Menu.Item>
        <Menu.Item key="setting-roles" onClick={() => handleMenuClick('/setting/roles')}>Roles</Menu.Item>
        <Menu.Item key="login" onClick={() => handleMenuClick('/setting/login')}>Login History</Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="feedback" icon={<MessageOutlined />} onClick={() => handleMenuClick('/feedback')}>Feedback</Menu.Item>

      <Menu.SubMenu title="Shift" key="shift" icon={<ToolOutlined />}>
        <Menu.Item key="shift-main" onClick={() => handleMenuClick('/shift')}>Shift</Menu.Item>
        <Menu.Item key="list" onClick={() => handleMenuClick('/shift/list')}>List</Menu.Item>
        <Menu.Item key="calendar" onClick={() => handleMenuClick('/shift/calendar')}>Calendar</Menu.Item>
        <Menu.Item key="employees" onClick={() => handleMenuClick('/shift/employees')}>Employees</Menu.Item>
        <Menu.Item key="shift-request" onClick={() => handleMenuClick('/shift/request')}>Request</Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="shiftgroup" icon={<TeamOutlined />} onClick={() => handleMenuClick('/shiftgroup')}>Shift Group</Menu.Item>

      <Menu.SubMenu title="Report" key="report" icon={<FileTextOutlined />}>
        <Menu.Item key="report-main" onClick={() => handleMenuClick('/report')}>Reports</Menu.Item>
        <Menu.Item key="report-daily" onClick={() => handleMenuClick('/report/daily')}>Dailys</Menu.Item>
        <Menu.Item key="monthly" onClick={() => handleMenuClick('/report/monthly')}>Monthly</Menu.Item>
        <Menu.Item key="summary" onClick={() => handleMenuClick('/report/summary')}>Summary</Menu.Item>
        <Menu.Item key="report-detail" onClick={() => handleMenuClick('/report/detail')}>Details</Menu.Item>
        <Menu.Item key="top" onClick={() => handleMenuClick('/report/top')}>Top Employee</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}

export default MenuList
