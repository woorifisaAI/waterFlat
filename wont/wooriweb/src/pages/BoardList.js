import React from 'react'
import { Table } from 'semantic-ui-react'
import './BoardView.css';

const BoardList = () => (
  <Table striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>번호</Table.HeaderCell>
        <Table.HeaderCell>제목</Table.HeaderCell>
        <Table.HeaderCell>작성자</Table.HeaderCell>
        <Table.HeaderCell>작성날짜</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>7</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>6</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>5</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>4</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>3</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>2</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>0</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default BoardList