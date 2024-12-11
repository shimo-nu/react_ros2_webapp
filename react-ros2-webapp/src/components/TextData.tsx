import React, { useEffect, useState } from 'react';
import rclnodejs from 'rclnodejs';

interface TextDataProps {
  topicName: string;
  ros: any;
}

// const TextData: React.FC<TextDataProps> = ({ topicName }) => {
//   const [data, setData] = useState<string>('');

//   useEffect(() => {
//     rclnodejs.init().then(() => {
//       const node = new rclnodejs.Node('webapp_node');
//       const subscription = node.createSubscription(
//         'std_msgs/msg/String',
//         topicName,
//         (msg: { data: string }) => {
//           setData(msg.data);
//         }
//       );
//       rclnodejs.spin(node);

//       return () => {
//         node.destroy();
//         rclnodejs.shutdown();
//       };
//     });
//   }, [topicName]);

//   return (
//     <div>
//       <h1>Received Data:</h1>
//       <p>{data}</p>
//     </div>
//   );
// };

// export default TextData;
import ROSLIB from 'roslib';

const TextData: React.FC<TextDataProps> = ({ topicName, ros }) => {
  const [data, setData] = useState<string>('');

  // useEffect(() => {
  //   const ros = new ROSLIB.Ros({
  //     url: 'ws://localhost:9090'
  //   });

  //   ros.on('connection', () => {
  //     console.log('Connected to websocket server.');
  //   });

  //   ros.on('error', (error) => {
  //     console.log('Error connecting to websocket server: ', error);
  //   });

  //   ros.on('close', () => {
  //     console.log('Connection to websocket server closed.');
  //   });

  //   const listener = new ROSLIB.Topic({
  //     ros: ros,
  //     name: topicName,
  //     messageType: 'std_msgs/String'
  //   });

  //   listener.subscribe((message) => {
  //     setData(message.data);
  //   });

  //   return () => {
  //     listener.unsubscribe();
  //     ros.close();
  //   };
  // }, [topicName]);

  useEffect(() => {
    if (!ros) return;

    var text = new ROSLIB.Topic({
      ros: ros,
      name: topicName,
      messageType: 'std_msgs/String'
    });

    text.subscribe(function(message: any) {
      setData(message.data);
    });
  }, [ros]);
  
  return (
    <div>
      <h1>Received Data:</h1>
      <p>{data}</p>
    </div>
  );
};

export default TextData;