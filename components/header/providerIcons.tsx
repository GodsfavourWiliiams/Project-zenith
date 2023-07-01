export const Notification = () => {
    return (
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.76279 0.288691C5.15575 0.157705 5.58049 0.370075 5.71147 0.763033C5.84246 1.15599 5.63009 1.58073 5.23713 1.71172L5.08318 1.76303C3.5155 2.28559 2.28535 3.51575 1.76279 5.08342L1.71147 5.23737C1.58049 5.63033 1.15575 5.8427 0.762789 5.71172C0.369831 5.58073 0.157461 5.15599 0.288447 4.76303L0.339764 4.60908C1.01162 2.5935 2.59326 1.01187 4.60884 0.340008L4.76279 0.288691ZM13.237 0.288691C12.8441 0.157705 12.4194 0.370075 12.2884 0.763033C12.1574 1.15599 12.3698 1.58073 12.7627 1.71172L12.9167 1.76303C14.4843 2.28559 15.7145 3.51575 16.237 5.08342L16.2884 5.23737C16.4194 5.63033 16.8441 5.8427 17.237 5.71172C17.63 5.58073 17.8424 5.15599 17.7114 4.76303L17.6601 4.60908C16.9882 2.5935 15.4066 1.01187 13.391 0.340008L13.237 0.288691ZM8.99992 2C5.77086 2 3.05374 4.49086 2.67955 7.79403L2.33467 10.8385C2.24898 11.595 1.94238 12.3069 1.45541 12.88C0.422002 14.0964 1.26073 16 2.83005 16H15.1698C16.7391 16 17.5778 14.0964 16.5444 12.88C16.0575 12.3069 15.7509 11.595 15.6652 10.8385L15.3203 7.79403C14.9461 4.49086 12.229 2 8.99992 2ZM8.99992 20C10.3564 20 11.5147 19.1992 11.972 18.0715C11.9911 18.0245 11.9999 17.974 11.9999 17.9233C11.9999 17.6895 11.8104 17.5 11.5766 17.5H6.4232C6.18943 17.5 5.99992 17.6895 5.99992 17.9233C5.99992 17.974 6.00874 18.0245 6.02781 18.0715C6.48517 19.1992 7.64338 20 8.99992 20Z" fill="#28303F"/>
        </svg>
    );
  };
  
  export const PlusIcon = ({ width, height, color }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill={color}>
        <path
          fill={color}
          fillRule="evenodd"
          d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"
        />
      </svg>
    );
  };
  
  export const Hamburger = ({ width, height }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 7H19"
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 12L19 12"
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 17L19 17"
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };