import React from 'react';

const DatesSection = () => {
  return (
    <section className="dates-section">
      <div className="content-wrapper">
        {/* Your dates content */}
      </div>
    </section>
  );
};

export default React.memo(DatesSection); // Memoize to prevent unnecessary re-renders 