import { useState } from "react";

import { BiPlus } from "react-icons/bi";
import { Modal } from "antd";

import styles from "./AddTicket.module.css";
import Input from "../UI/Input";
import Option from "../UI/Option";
import { useApp } from "../../hooks/UseApp";

const AddTicket = () => {
  const { users } = useApp();

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("4");
  const [user, setUser] = useState("");

  const options = users.map((user) => {
    return { name: user.name, id: user._id };
  });

  function handleAddTicket() {
    console.log(title, tags, status, priority, user);
    setOpen(false);
  }

  return (
    <>
      <button className={styles.addTicket} onClick={() => setOpen(true)}>
        <BiPlus />
      </button>
      <Modal
        title="Add Ticket"
        open={open}
        onOk={handleAddTicket}
        okText="Add"
        onCancel={() => setOpen(false)}
        okButtonProps={{ style: { backgroundColor: "var(--primary)" } }}
      >
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ticket title"
        />
        <Input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags (comma seperated)"
        />
        <Input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Status"
        />
        <Option
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          options={[
            { id: 0, name: "0" },
            { id: 1, name: "1" },
            { id: 2, name: "2" },
            { id: 3, name: "3" },
            { id: 4, name: "4" },
          ]}
        />
        <Option
          value={user}
          onChange={(e) => setUser(e.target.value)}
          options={options}
        />
      </Modal>
    </>
  );
};

export default AddTicket;
