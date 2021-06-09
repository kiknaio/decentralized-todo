// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * The Todo contract will hold tasks in a decentralized manner
 */
contract Todo {
  struct Task {
    uint id;
    uint date;
    string content;
    address author;
    bool done;
  }

  uint nextTaskId;
  mapping(uint => Task) tasks;

  constructor() {
    nextTaskId = 0;
  }

  event TaskCreated(uint, address, string);
  
  function createTask(string memory _content) public {
    tasks[nextTaskId] = Task(nextTaskId, block.timestamp, _content, msg.sender, false);
    emit TaskCreated(nextTaskId, msg.sender, _content);
    nextTaskId++;
  }

  function getTask(uint _id) public view returns (
      uint,
      uint,
      string memory,
      address,
      bool
    )
  {
    return (
      _id,
      tasks[_id].date,
      tasks[_id].content,
      tasks[_id].author,
      tasks[_id].done
    );
  }

  function getTasks() public view returns(Task[] memory) {
    return tasks;
  }
  
}

