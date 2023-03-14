import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>My History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Begining</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task 1</td>
              <td>20 min</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="yellow">ongoing</Status>
              </td>
            </tr>
            <tr>
              <td>Task 2</td>
              <td>20 min</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="yellow">ongoing</Status>
              </td>
            </tr>
            <tr>
              <td>Task 3</td>
              <td>20 min</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="yellow">ongoing</Status>
              </td>
            </tr>
            <tr>
              <td>Task 4</td>
              <td>20 min</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="green">completed</Status>
              </td>
            </tr>
            <tr>
              <td>Task 5</td>
              <td>20 min</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="red">interrupted</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
