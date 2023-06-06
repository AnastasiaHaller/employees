import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return(
        <div className="app-info">
            <h1>Company employees</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>Get bonus: {increased}</h2>
        </div>
    )
}

export default AppInfo;