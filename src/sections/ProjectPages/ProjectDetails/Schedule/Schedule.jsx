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
                           
                        </tr>
                        <tr>
                            <td>Public/Private</td>
                            <td>30.04.2023 at 5:00 pm UTC</td>
                           
                        </tr>
    
                    </tbody>
                </table>
            </div>
        </ScheduleStyleWrapper>
    )
}

export default Schedule;