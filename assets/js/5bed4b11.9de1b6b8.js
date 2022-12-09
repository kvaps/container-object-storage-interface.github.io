(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{119:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return r?o.a.createElement(m,c(c({ref:t},l),{},{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(119)),i={title:"Deploying COSI"},c={unversionedId:"deployment-guide",id:"deployment-guide",isDocsHomePage:!1,title:"Deploying COSI",description:"This document describes steps for Kubernetes administrators to setup Container Object Storage Interface (COSI) onto a Kubernetes cluster.",source:"@site/docs/deployment-guide.md",slug:"/deployment-guide",permalink:"/docs/deployment-guide",editUrl:"https://github.com/container-object-storage-interface/container-object-storage-interface.github.io/edit/master/docs/deployment-guide.md",version:"current",lastUpdatedBy:"Akash Mukhopadhyay",lastUpdatedAt:1666894223,formattedLastUpdatedAt:"10/27/2022",sidebar:"docs",previous:{title:"Internals",permalink:"/docs/cosi/internals"},next:{title:"Using COSI",permalink:"/docs/user-guide"}},s=[{value:"Overview",id:"overview",children:[{value:"Quick Start",id:"quick-start",children:[]},{value:"CustomResourceDefinitions",id:"customresourcedefinitions",children:[]},{value:"Controller",id:"controller",children:[]},{value:"Driver &amp; Sidecar",id:"driver--sidecar",children:[]}]}],l={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This document describes steps for Kubernetes administrators to setup Container Object Storage Interface (COSI) onto a Kubernetes cluster."),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Following components that need to be deployed in Kubernetes to setup COSI."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"CustomResourceDefinitions (CRDs)"),Object(a.b)("li",{parentName:"ul"},"Controller"),Object(a.b)("li",{parentName:"ul"},"Sidecar for the driver"),Object(a.b)("li",{parentName:"ul"},"Driver")),Object(a.b)("h3",{id:"quick-start"},"Quick Start"),Object(a.b)("p",null,"Execute following commands to setup COSI:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"# Install CRDs\nkubectl create -k github.com/kubernetes-sigs/container-object-storage-interface-api\n\n# Install controller\nkubectl create -k github.com/kubernetes-sigs/container-object-storage-interface-controller\n")),Object(a.b)("h3",{id:"customresourcedefinitions"},"CustomResourceDefinitions"),Object(a.b)("p",null,"COSI acts on following custom resource definitions (CRDs):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"BucketClaim")," - Represents a claim to provision a Bucket"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"BucketClass")," - Represents a class of Buckets with similar characteristics"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Bucket")," - Represents a Bucket or its equivalent in the storage backend"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"BucketAccessClass")," - Represents a class of accessors with similar access requirements and authentication type"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"BucketAccess")," - Represents a resource to access a Bucket")),Object(a.b)("p",null,"All ",Object(a.b)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/container-object-storage-interface-api/tree/master/crds"},"COSI custom resource definitions")," can be installed using ",Object(a.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/kubernetes-sigs/container-object-storage-interface-api/master/kustomization.yaml"},"kustomization file")," and ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl")," with following command:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"kubectl create -k github.com/kubernetes-sigs/container-object-storage-interface-api\n")),Object(a.b)("h3",{id:"controller"},"Controller"),Object(a.b)("p",null,"COSI controller can be setup using the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/container-object-storage-interface-controller/blob/master/kustomization.yaml"},"kustomization file")," from the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/container-object-storage-interface-controller"},"container-object-storage-interface-controller")," repository with following command:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"kubectl create -k github.com/kubernetes-sigs/container-object-storage-interface-controller\n")),Object(a.b)("p",null,"The controller will be deployed in the ",Object(a.b)("inlineCode",{parentName:"p"},"default")," namespace."),Object(a.b)("h3",{id:"driver--sidecar"},"Driver & Sidecar"),Object(a.b)("p",null,"The sidecar of the driver along with the driver will be deployed along with the respective driver."))}u.isMDXComponent=!0}}]);