import React, { useState } from "react";
import { Button } from "../ui/button";

interface JoinRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJoinRoom: (roomId: string) => void;
}

const JoinRoomModal: React.FC<JoinRoomModalProps> = ({
  isOpen,
  onClose,
  onJoinRoom,
}) => {
  const [roomId, setRoomId] = useState<string>("");

  const handleClose = () => {
    setRoomId(""); // Clear roomId when modal closes
    onClose(); // Trigger the parent onClose function to handle closing the modal
  };

  const handleJoin = () => {
    if (roomId.trim()) {
      onJoinRoom(roomId); // Trigger the join room action with the entered room ID
      handleClose(); // Close the modal after joining
    }
  };

  if (!isOpen) return null; // Return nothing if the modal is not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#5b4fcb] rounded-lg w-96 p-6 shadow-lg">
        <h2 className="text-xl text-white font-semibold mb-4">Join a Room</h2>

        <input
          type="text"
          placeholder="Enter Room ID"
          className="w-full px-4 py-2 border rounded-lg mb-4"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />

        <div className="flex justify-end space-x-2">
          <Button
            onClick={handleClose}
            variant={"ghost"}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
          >
            Cancel
          </Button>
          <Button
            onClick={handleJoin}
            className="px-4 py-2 bg-white  text-black hover:bg-slate-100 rounded-lg"
          >
            Join Room
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JoinRoomModal;
