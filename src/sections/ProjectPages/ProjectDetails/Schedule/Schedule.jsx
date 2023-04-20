import ScheduleStyleWrapper from "./Schedule.style"

const Schedule = () => {
    return (
        <ScheduleStyleWrapper id="schedule">
            <h4 className="widget_title">Schedule</h4>

            <div className="schedule_table">
                <table>
                    <tbody>
                        <tr className="table-header">
                            <th>Mint</th>
                            <th>Opens</th>
                            <th>Closes</th> 
                        </tr>
                        <tr>
                            <td>Public/Private</td>
                            <td>25.04.2024 08:00:00 UTC</td>
                            <td>26.04.2024 04:00:00 UTC</td> 
                        </tr>
    
                    </tbody>
                </table>
            </div>
        </ScheduleStyleWrapper>
    )
}

export default Schedule;