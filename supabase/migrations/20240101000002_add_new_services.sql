-- Update constraints for consultations table
ALTER TABLE consultations DROP CONSTRAINT IF EXISTS consultations_service_type_check;
ALTER TABLE consultations ADD CONSTRAINT consultations_service_type_check 
CHECK (service_type IN ('furniture', 'window', 'grouting', 'cushion', 'formaldehyde'));

-- Update constraints for case_studies table
ALTER TABLE case_studies DROP CONSTRAINT IF EXISTS case_studies_category_check;
ALTER TABLE case_studies ADD CONSTRAINT case_studies_category_check 
CHECK (category IN ('furniture', 'window', 'grouting', 'cushion', 'formaldehyde'));
