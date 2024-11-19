import SwaggerUI from 'swagger-ui-dist/swagger-ui';
import 'swagger-ui-dist/swagger-ui.css';
import spec from './swagger.yaml';

SwaggerUI({
  spec,
  dom_id: '#swagger-ui',
});