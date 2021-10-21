initSidebarItems({"enum":[["PipeDirection","The direction of a named pipe connection, designating who can read data and who can write it. This describes the direction of the data flow unambiguously, so that the meaning of the values is the same for the client and server — `ClientToServer` always means client → server, for example."],["PipeMode","Specifies the mode for a pipe stream."],["PipeStreamRole","Describes the role of a named pipe stream. In constrast to `PipeDirection`, the meaning of values here is relative — for example, `Reader` means `ServerToClient` if you’re creating a server and `ClientToServer` if you’re creating a client."]],"fn":[["connect","Connects to the specified named pipe, returning a named pipe stream of the stream type provided via generic parameters."]],"struct":[["ByteReaderPipeStream","Byte stream reader for a named pipe."],["ByteWriterPipeStream","Byte stream writer for a named pipe."],["DuplexBytePipeStream","Byte stream reader and writer for a named pipe."],["DuplexMsgPipeStream","Message stream reader and writer for a named pipe."],["Incoming","An iterator that infinitely `accept`s connections on a `PipeListener`."],["MsgReaderPipeStream","Message stream reader for a named pipe."],["MsgWriterPipeStream","Message stream writer for a named pipe."],["PipeListener","The server for a named pipe, listening for connections to clients and producing pipe streams."],["PipeListenerOptions","Allows for thorough customization of `PipeListener`s during creation."]],"trait":[["PipeStream","Defines the properties of pipe stream types."]]});