import axios from 'axios';
import { defaultConfig } from 'next/dist/next-server/server/config-shared';

export default ({ req }) => {
   if(typeof window === 'undefined') {
      // On server
      return axios.create ({
         baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
         headers: req.headers
      });

   } else {
      // On browser
      return axios.create ({
         baseURL: '/'
      });
   }
}