import { css, customElement, html } from 'lit-element';
import { toggleVideoDialog } from '../store/ui/actions';
import { ThemedElement } from './themed-element';

@customElement('about-block')
export class AboutBlock extends ThemedElement {
  static get styles() {
    return [
      ...super.styles,
      css`
        .container {
          padding-top: 64px;
        }

        .content {
          display: grid;
          grid-gap: 32px;
          grid-template-columns: 1fr;
        }

        .statistics-block {
          width: 100%;
          display: grid;
          grid-gap: 32px 16px;
          grid-template-columns: repeat(2, 1fr);
        }

        .numbers {
          font-size: 40px;
        }

        .numbers::after {
          content: '';
          display: block;
          height: 2px;
          width: 64px;
          background-color: var(--default-primary-color);
        }

        .label {
          margin-top: 4px;
        }

        @media (min-width: 640px) {
          .content {
            grid-gap: 64px;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          }

          .statistics-block {
            grid-gap: 32px;
          }

          .numbers {
            font-size: 56px;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="container">
        <div class="content">
          <div>
            <h1 class="container-title">{$ aboutBlock.title $}</h1>
            <p>{$ aboutBlock.callToAction.featuredSessions.description $}</p>
          </div>
          <div class="statistics-block">
            <div class="item">
              <div class="numbers">{$ aboutBlock.statisticsBlock.attendees.number $}</div>
              <div class="label">{$ aboutBlock.statisticsBlock.attendees.label $}</div>
            </div>
            <div class="item">
              <div class="numbers">{$ aboutBlock.statisticsBlock.days.number $}</div>
              <div class="label">{$ aboutBlock.statisticsBlock.days.label $}</div>
            </div>
            <div class="item">
              <div class="numbers">{$ aboutBlock.statisticsBlock.sessions.number $}</div>
              <div class="label">{$ aboutBlock.statisticsBlock.sessions.label $}</div>
            </div>
            <div class="item">
              <div class="numbers">{$ aboutBlock.statisticsBlock.tracks.number $}</div>
              <div class="label">{$ aboutBlock.statisticsBlock.tracks.label $}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private playVideo() {
    toggleVideoDialog({
      title: '{$  aboutBlock.callToAction.howItWas.label $}',
      youtubeId: '{$  aboutBlock.callToAction.howItWas.youtubeId $}',
      disableControls: true,
      opened: true,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'about-block': AboutBlock;
  }
}
