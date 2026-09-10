import { ArrowUp } from 'lucide-react';
import { Button } from './styles';

export function ScrollTopLink() {
  return (
    <Button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <ArrowUp size={19} aria-hidden="true" />
    </Button>
  );
}
