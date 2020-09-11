import React from 'react';

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            {/* <WrappedComponent props={props} />       this will not work because all propertiess will assigned to single property props */}
            {/* instead we want name=="Viki" age="25" */}
            <WrappedComponent {...props} />
        </div>
    );
};

export default withClass;