import Dashboard from './pages/Dashboard'
import Activities from './pages/Activities'
import Feedback from './pages/Feedback'
import PushNotification from './pages/PushNotification'
import ShiftGroup from './pages/ShiftGroup'

// Setup pages
import Setup from './pages/setup/Setup'
import Employees from './pages/setup/Employees'
import Positions from './pages/setup/Positions'
import Roles from './pages/setup/Roles'
import EmployeeCategory from './pages/setup/EmployeeCategory'
import WorkCondition from './pages/setup/WorkCondotion'
import Skill from './pages/setup/Skill'
import Services from './pages/setup/Services'
import WorkDayTime from './pages/setup/WorkDayTime'
import EmployeeDocs from './pages/setup/EmployeeDocuments'

// Attendance pages
import Attendance from './pages/attendance/Attendance'
import AttendanceAll from './pages/attendance/All'
import CheckinEarly from './pages/attendance/CheckinEarly'
import CheckinLate from './pages/attendance/CheckinLate'
import CheckoutEarly from './pages/attendance/CheckoutEarly'
import CheckoutOvertime from './pages/attendance/CheckoutOvertime'
import AttendanceZone from './pages/attendance/AttendanceZone'

// Clock-In-Out pages
import ClockInOut from './pages/clockinout/ClockInOut'
import ClockRequest from './pages/clockinout/Request'
import ClockDaily from './pages/clockinout/Daily'
import ClockDetail from './pages/clockinout/Detail'

// Leave pages
import Leave from './pages/leave/Leave'
import LeaveRequest from './pages/leave/Request'
import LeaveType from './pages/leave/Type'
import LeaveGroup from './pages/leave/TypeGroup'

// Setting pages
import Setting from './pages/setting/Setting'
import Holidays from './pages/setting/Holidays'
import WorkDays from './pages/setting/WorkDays'
import Card from './pages/setting/Card'
import Users from './pages/setting/Users'
import SettingRoles from './pages/setting/Roles'
import LoginHistory from './pages/setting/LoginHistory'

// Shift pages
import Shift from './pages/shift/Shift'
import ShiftList from './pages/shift/List'
import ShiftCalendar from './pages/shift/Calendar'
import ShiftEmployees from './pages/shift/Employees'
import ShiftRequest from './pages/shift/Request'

// Report pages
import Reports from './pages/report/Reports'
import Dailys from './pages/report/Dailys'
import Monthly from './pages/report/Monthly'
import Summary from './pages/report/Summary'
import Details from './pages/report/Details'
import TopEmployee from './pages/report/TopEmployee'

export const routes = [
  { path: '/', element: <Dashboard />, key: 'dashboard' },
  { path: '/dashboard', element: <Dashboard />, key: 'dashboard' },
  
  // Setup routes
  { path: '/setup', element: <Setup />, key: 'setup-home' },
  { path: '/setup/employees', element: <Employees />, key: 'employees' },
  { path: '/setup/positions', element: <Positions />, key: 'positions' },
  { path: '/setup/roles', element: <Roles />, key: 'roles' },
  { path: '/setup/employee-category', element: <EmployeeCategory />, key: 'employee-category' },
  { path: '/setup/work-condition', element: <WorkCondition />, key: 'work-condition' },
  { path: '/setup/skill', element: <Skill />, key: 'skill' },
  { path: '/setup/services', element: <Services />, key: 'services' },
  { path: '/setup/workdaytime', element: <WorkDayTime />, key: 'workdaytime' },
  { path: '/setup/employee-docs', element: <EmployeeDocs />, key: 'employee-docs' },
  
  // Attendance routes
  { path: '/attendance', element: <Attendance />, key: 'attendance-list' },
  { path: '/attendance/all', element: <AttendanceAll />, key: 'attendance-all' },
  { path: '/attendance/checkin-early', element: <CheckinEarly />, key: 'checkin-early' },
  { path: '/attendance/checkin-late', element: <CheckinLate />, key: 'checkin-late' },
  { path: '/attendance/checkout-early', element: <CheckoutEarly />, key: 'checkout-early' },
  { path: '/attendance/checkout-overtime', element: <CheckoutOvertime />, key: 'checkout-overtime' },
  { path: '/attendance/zone', element: <AttendanceZone />, key: 'attendance-zone' },
  
  { path: '/activities', element: <Activities />, key: 'activities' },
  
  // Clock-In-Out routes
  { path: '/clock', element: <ClockInOut />, key: 'clock-main' },
  { path: '/clock/request', element: <ClockRequest />, key: 'clock-request' },
  { path: '/clock/daily', element: <ClockDaily />, key: 'clock-daily' },
  { path: '/clock/detail', element: <ClockDetail />, key: 'clock-detail' },
  
  // Leave routes
  { path: '/leave', element: <Leave />, key: 'leave-main' },
  { path: '/leave/request', element: <LeaveRequest />, key: 'leave-request' },
  { path: '/leave/type', element: <LeaveType />, key: 'leave-type' },
  { path: '/leave/group', element: <LeaveGroup />, key: 'leave-group' },
  
  { path: '/pushnotification', element: <PushNotification />, key: 'pushnotification' },
  
  // Setting routes
  { path: '/setting', element: <Setting />, key: 'setting-main' },
  { path: '/setting/holidays', element: <Holidays />, key: 'setting-holidays' },
  { path: '/setting/workdays', element: <WorkDays />, key: 'setting-workdays' },
  { path: '/setting/card', element: <Card />, key: 'setting-card' },
  { path: '/setting/users', element: <Users />, key: 'setting-users' },
  { path: '/setting/roles', element: <SettingRoles />, key: 'setting-roles' },
  { path: '/setting/login', element: <LoginHistory />, key: 'setting-login' },
  
  { path: '/feedback', element: <Feedback />, key: 'feedback' },
  
  // Shift routes
  { path: '/shift', element: <Shift />, key: 'shift-main' },
  { path: '/shift/list', element: <ShiftList />, key: 'shift-list' },
  { path: '/shift/calendar', element: <ShiftCalendar />, key: 'shift-calendar' },
  { path: '/shift/employees', element: <ShiftEmployees />, key: 'shift-employees' },
  { path: '/shift/request', element: <ShiftRequest />, key: 'shift-request' },
  
  { path: '/shiftgroup', element: <ShiftGroup />, key: 'shiftgroup' },
  
  // Report routes
  { path: '/report', element: <Reports />, key: 'report-main' },
  { path: '/report/daily', element: <Dailys />, key: 'report-daily' },
  { path: '/report/monthly', element: <Monthly />, key: 'report-monthly' },
  { path: '/report/summary', element: <Summary />, key: 'report-summary' },
  { path: '/report/detail', element: <Details />, key: 'report-detail' },
  { path: '/report/top', element: <TopEmployee />, key: 'report-top' },
]