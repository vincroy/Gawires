(function() {var implementors = {};
implementors["futures_lite"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"futures_lite/io/struct.BlockOn.html\" title=\"struct futures_lite::io::BlockOn\">BlockOn</a>&lt;T&gt;","synthetic":false,"types":["futures_lite::io::BlockOn"]}];
implementors["futures_util"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"futures_util/io/struct.AllowStdIo.html\" title=\"struct futures_util::io::AllowStdIo\">AllowStdIo</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>","synthetic":false,"types":["futures_util::io::allow_std::AllowStdIo"]}];
implementors["interprocess"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"interprocess/local_socket/struct.LocalSocketStream.html\" title=\"struct interprocess::local_socket::LocalSocketStream\">LocalSocketStream</a>","synthetic":false,"types":["interprocess::local_socket::LocalSocketStream"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"interprocess/unnamed_pipe/struct.UnnamedPipeReader.html\" title=\"struct interprocess::unnamed_pipe::UnnamedPipeReader\">UnnamedPipeReader</a>","synthetic":false,"types":["interprocess::unnamed_pipe::UnnamedPipeReader"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"interprocess/os/unix/udsocket/struct.UdStream.html\" title=\"struct interprocess::os::unix::udsocket::UdStream\">UdStream</a>","synthetic":false,"types":["interprocess::os::unix::udsocket::UdStream"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"interprocess/os/windows/named_pipe/struct.ByteReaderPipeStream.html\" title=\"struct interprocess::os::windows::named_pipe::ByteReaderPipeStream\">ByteReaderPipeStream</a>","synthetic":false,"types":["interprocess::os::windows::named_pipe::ByteReaderPipeStream"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"interprocess/os/windows/named_pipe/struct.DuplexBytePipeStream.html\" title=\"struct interprocess::os::windows::named_pipe::DuplexBytePipeStream\">DuplexBytePipeStream</a>","synthetic":false,"types":["interprocess::os::windows::named_pipe::DuplexBytePipeStream"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"interprocess/os/windows/named_pipe/struct.MsgReaderPipeStream.html\" title=\"struct interprocess::os::windows::named_pipe::MsgReaderPipeStream\">MsgReaderPipeStream</a>","synthetic":false,"types":["interprocess::os::windows::named_pipe::MsgReaderPipeStream"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"interprocess/os/windows/named_pipe/struct.DuplexMsgPipeStream.html\" title=\"struct interprocess::os::windows::named_pipe::DuplexMsgPipeStream\">DuplexMsgPipeStream</a>","synthetic":false,"types":["interprocess::os::windows::named_pipe::DuplexMsgPipeStream"]}];
implementors["mio"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio/net/struct.TcpStream.html\" title=\"struct mio::net::TcpStream\">TcpStream</a>","synthetic":false,"types":["mio::net::tcp::TcpStream"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"mio/net/struct.TcpStream.html\" title=\"struct mio::net::TcpStream\">TcpStream</a>","synthetic":false,"types":["mio::net::tcp::TcpStream"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()