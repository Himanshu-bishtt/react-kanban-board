import { useState } from "react";

import { Modal, message } from "antd";

import Input from "../UI/Input";
import Option from "../UI/Option";
import { useApp } from "../../hooks/UseApp";

const UpdateTicket = () => {
  const {
    users,
    currentTicket,
    updateTicketModal,
    setUpdateTicketModal,
    updateTickets,
  } = useApp();

  const [title, setTitle] = useState(currentTicket.title);
  const [tags, setTags] = useState(function () {
    const tags = currentTicket.tag as string[];
    return tags.join(", ");
  });
  const [status, setStatus] = useState(currentTicket.status);
  const [priority, setPriority] = useState(currentTicket.priority);
  const [user, setUser] = useState(currentTicket.userId);

  const options = users.map((user) => {
    return { name: user.name, id: user._id };
  });

  function resetState() {
    setTitle("");
    setTags("");
    setStatus("");
    setPriority("4");
    setUser(users.at(0)?.name || "Anoop Sharma");
  }

  function handleUpdateTicket() {
    if (!title || !tags || !status || !priority || !user)
      return message.error("Fields cannot be empty");

    updateTickets(
      {
        title,
        tag: tags,
        priority,
        status,
        userId: user,
      },
      currentTicket._id
    );
    resetState();
    setUpdateTicketModal(false);
  }

  return (
    <Modal
      title="Update Ticket"
      open={updateTicketModal}
      onOk={handleUpdateTicket}
      okText="Update"
      centered
      onCancel={() => {
        setUpdateTicketModal(false);
      }}
      okButtonProps={{ style: { backgroundColor: "var(--primary)" } }}
    >
      <Input
        name="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ticket title"
      />
      <Input
        name="tags"
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags (comma seperated)"
      />
      <Input
        name="status"
        type="text"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        placeholder="Status"
      />
      <Option
        name="priority"
        value={String(priority)}
        onChange={(e) => setPriority(e.target.value)}
        defaultMessage="Select priority"
        options={[
          { id: 0, name: "0" },
          { id: 1, name: "1" },
          { id: 2, name: "2" },
          { id: 3, name: "3" },
          { id: 4, name: "4" },
        ]}
      />
      <Option
        name="user"
        value={user}
        defaultMessage="Select user"
        onChange={(e) => setUser(e.target.value)}
        options={options}
      />
    </Modal>
  );
};

export default UpdateTicket;
